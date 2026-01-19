interface LCDBlockProps {
  isActive: boolean;
  glitch: boolean;
}

const LCDBlock = (props: LCDBlockProps) => {
  const { isActive, glitch } = props;

  const baseLines = ["10101011", "11001010", "10110011", "01010111"];

  const randomizeLine = (length: number) =>
    Array.from({ length }, () => (Math.random() > 0.5 ? "1" : "0")).join("");

  const lines = glitch
    ? baseLines.map((line) => randomizeLine(line.length))
    : baseLines;

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

export default LCDBlock;