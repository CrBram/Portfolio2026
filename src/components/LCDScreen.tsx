import { useState, useEffect, useRef } from 'react';
import LCDBlock from './LCDBlock';
import { LETTER_MAPS } from '@/lib/lcd_letter-map';

const LCDScreen = () => {
  const words = ["HELLO", "WORLD", "REACT", "FIGMA", "NEXT.", "01010"];
  const maxTicks = 6;
  const glitchSpeed = 100;
  const [wordId, setWordId] = useState(0);
  const [glitch, setGlitch] = useState(true);
  const [glitchTick, setGlitchTick] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const [manualBlocks, setManualBlocks] = useState<Record<string, boolean>>({});
  const inactivityTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetInactivityTimer = () => {
    if (inactivityTimeout.current) {
      clearTimeout(inactivityTimeout.current);
    }

    inactivityTimeout.current = setTimeout(() => {
      setIsManual(false);
      setManualBlocks({});
      setGlitch(true);
    }, 4000);
  };

  const runGlitch = (
    onComplete?: () => void,
    ticksOverride?: number
  ) => {
    setGlitch(true);

    let ticks = 0;
    const totalTicks = ticksOverride ?? maxTicks;

    const glitchInterval = setInterval(() => {
      setGlitchTick((t) => t + 1);
      ticks++;

      if (ticks > totalTicks) {
        clearInterval(glitchInterval);
        setGlitch(false);
        onComplete?.();
      }
    }, glitchSpeed);
  };

  useEffect(() => {
    if (isManual) return;

    runGlitch();

    const timer = setInterval(() => {
      runGlitch(() => {
        setWordId((prev) => (prev + 1) % words.length);
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isManual]);

  return (
    <div className="w-full flex items-center justify-center max-w-full">
      <div className="flex w-full justify-between items-start gap-2 md:gap-6 max-w-full">
        {words[wordId].split('').map((char, charId) => (
          <div
            key={`${charId}-${wordId}`}
            className="grid flex-1 grid-cols-3 gap-x-[2px] gap-y-[2px] lg:gap-x-[4px] lg:gap-y-[4px]"
          >
            {LETTER_MAPS[char]?.map((isActive, blockId) => {
              const blockKey = `${charId}-${blockId}`;

              const finalIsActive = isManual
                ? manualBlocks[blockKey] ?? false
                : glitch
                  ? Math.random() > 0.5
                  : Boolean(isActive);

              return (
                <LCDBlock
                  key={`${charId}-${wordId}-${blockId}-${glitchTick}`}
                  isActive={finalIsActive}
                  glitch={glitch}
                  onClick={() => {
                    resetInactivityTimer();

                    if (!isManual) {
                      setIsManual(true);

                      runGlitch(() => {
                        setManualBlocks({
                          [blockKey]: true,
                        });
                        setGlitch(false);
                      }, 3);

                      return;
                    }

                    setManualBlocks((prev) => ({
                      ...prev,
                      [blockKey]: !prev[blockKey],
                    }));
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LCDScreen;