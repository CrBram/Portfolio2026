import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  sideways?: boolean;
}

const Typography = (props: TypographyProps) => {
  const { children, variant, sideways } = props;

  const variants = {
    h1: 'text-tx-light font-bold text-6xl sm:text-7xl md:text-9xl -ml-0.5 sm:-ml-1 md:-ml-1.5',
    h2: 'text-primary font-share-tech-mono text-2xl sm:text-3xl md:text-5xl',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    p: 'text-base font-normal',
    span: 'text-base font-normal',
    div: 'text-base font-normal',
  }

  return (
    <div style={{ writingMode: sideways ? 'sideways-lr' : 'inherit' }} className={cn(variants[variant])}>
      {children}
    </div>
  )
}

export default Typography