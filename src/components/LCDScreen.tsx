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
  isHovered: boolean;
  onHover: () => void;
}

const LCDBlock = (props: LCDBlockProps) => {
  const { isActive, isHovered, onHover } = props;
  const lines = ["10101011", "01010010", "00110100", "10101011"];

  return (
    <div
      onMouseEnter={onHover}
      className={`select-none flex flex-col leading-[1] transition-all duration-300 w-full ${isActive ? 'text-primary' : 'text-tx-light-subtle opacity-20'
        } ${isHovered ? 'opacity-100 scale-105' : ''}`}
      style={{
        textShadow: isActive ? '0 0 8px rgba(239, 68, 68, 0.6)' : 'none',
      }}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          className="font-ShareTechMono text-center w-full"
          style={{ fontSize: 'clamp(2px, 1.1vw, 30px)' }}
        >
          {line}
        </span>
      ))}
    </div>
  );
};

const LCDScreen = () => {
  const words = ["HELLO", "WORLD", "REACT", "FIGMA"];
  const [wordIdx, setWordIdx] = useState(0);
  const [hoveredPos, setHoveredPos] = useState<{ c: number; b: number } | null>(null);
  const [glitch, setGlitch] = useState(true);

  useEffect(() => {
    const initialGlitchTimeout = setTimeout(() => {
      setGlitch(false);
    }, 400);

    const timer = setInterval(() => {
      setGlitch(true);
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % words.length);
        setGlitch(false);
      }, 400);
    }, 4000);
    return () => {
      clearTimeout(initialGlitchTimeout);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex w-full justify-between items-start gap-2 md:gap-6">
        {words[wordIdx].split('').map((char, charIdx) => (
          <div
            key={`${charIdx}-${wordIdx}`}
            className="grid grid-cols-3 gap-x-[2px] gap-y-[2px] lg:gap-x-[6px] lg:gap-y-[6px]"
          >
            {LETTER_MAPS[char]?.map((isActive, blockIdx) => (
              <LCDBlock
                key={blockIdx}
                isActive={glitch ? Math.random() > 0.5 : Boolean(isActive)}
                isHovered={hoveredPos?.c === charIdx && hoveredPos?.b === blockIdx}
                onHover={() => setHoveredPos({ c: charIdx, b: blockIdx })}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LCDScreen;