import { useState, useEffect } from 'react';

const LETTER_MAPS: Record<string, number[]> = {
  A: [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  B: [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
  C: [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1],
  D: [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  E: [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
  F: [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  G: [0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  H: [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  I: [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
  J: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1],
  K: [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  L: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
  M: [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  N: [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  O: [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
  P: [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  Q: [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
  R: [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  S: [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
  T: [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
  U: [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  V: [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
  W: [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  X: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  Y: [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
  Z: [1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
  ".": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  " ": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

interface LCDBlockProps {
  isActive: boolean;
}

const LCDBlock = ({ isActive }: LCDBlockProps) => {
  const lines = ["10101011", "11001010", "10110011", "01010111"];

  return (
    <div
      className={`
        select-none flex flex-col leading-[1] transition-all duration-300 w-full
        ${isActive ? 'text-primary opacity-100' : 'text-tx-light-subtle opacity-20'} 
        hover:!opacity-100 hover:scale-105
      `}
      style={{
        filter: isActive ? 'drop-shadow(0 0 4px rgba(239, 68, 68, 0.8))' : 'none'
      }}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          className="font-ShareTechMono text-center w-full"
          style={{ fontSize: 'clamp(2px, 1.1vw, 40px)' }}
        >
          {line}
        </span>
      ))}
    </div>
  );
};

const LCDScreen = () => {
  const words = ["HELLO", "WORLD", "REACT", "FIGMA"];
  const maxTicks = 6;
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
    }, 60);
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
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LCDScreen;