interface ChipProps {
  content: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Chip = (props: ChipProps) => {
  const { content, size = "md", className } = props;

  const sizeClasses =
    size === 'sm'
      ? 'text-xs sm:text-sm'
      : size === 'lg'
        ? 'text-xl'
        : 'text-lg'

  return (
    <div
      key={content}
      className={`uppercase hover:scale-105 transition-all duration-100 w-fit text-tx-dark font-share-tech-mono ${sizeClasses} bg-[#DEDEDE] px-2 ${className ?? ''}`}
    >
      {content}
    </div>
  )
}

export default Chip