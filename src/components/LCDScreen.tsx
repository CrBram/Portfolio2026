import { useState, useEffect } from 'react';
import LCDBlock from './LCDBlock';
import { LETTER_MAPS } from '@/lib/lcd_letter-map';

const LCDScreen = () => {
  const words = ["HELLO", "WORLD", "REACT", "FIGMA"];
  const maxTicks = 6;
  const glitchSpeed = 100;
  const [wordId, setWordId] = useState(0);
  const [glitch, setGlitch] = useState(true);
  const [glitchTick, setGlitchTick] = useState(0);

  const runGlitch = (onComplete?: () => void) => {
    setGlitch(true);

    let ticks = 0;
    const glitchInterval = setInterval(() => {
      setGlitchTick((t) => t + 1);
      ticks++;

      if (ticks > maxTicks) {
        clearInterval(glitchInterval);
        setGlitch(false);
        onComplete?.();
      }
    }, glitchSpeed);
  };

  useEffect(() => {
    runGlitch()

    const timer = setInterval(() => {
      runGlitch(() => {
        setWordId((prev) => (prev + 1) % words.length);
      });
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex w-full justify-between items-start gap-2 md:gap-6">
        {words[wordId].split('').map((char, charId) => (
          <div
            key={`${charId}-${wordId}`}
            className="grid flex-1 grid-cols-3 gap-x-[2px] gap-y-[2px] lg:gap-x-[4px] lg:gap-y-[4px]"
          >
            {LETTER_MAPS[char]?.map((isActive, blockId) => (
              <LCDBlock
                key={`${charId}-${wordId}-${blockId}-${glitchTick}`}
                isActive={glitch ? Math.random() > 0.5 : Boolean(isActive)}
                glitch={glitch}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LCDScreen;