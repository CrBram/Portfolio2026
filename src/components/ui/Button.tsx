import { cn } from "@/lib/utils"

interface ButtonProps {
  text: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

const Button = (props: ButtonProps) => {
  const { text, onClick, className, disabled } = props

  return (
    <div className={"flex items-center"}>
      <button type="button" disabled={disabled} className={cn("bg-primary text-tx-black px-4 md:px-16 py-3 font-bold text-xl md:text-4xl flex items-center gap-6 cursor-pointer hover:bg-primary-hover hover:scale-102 transition-all duration-300", className)} onClick={onClick}>{text}
        <img src="/images/icons/arrow.svg" alt="arrow" className="w-4 h-4 md:w-6 md:h-6" />
      </button>
    </div>
  )
}

export default Button