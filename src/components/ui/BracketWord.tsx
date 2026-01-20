interface BracketWordProps {
  children: React.ReactNode;
}

const BracketWord = (props: BracketWordProps) => {
  const { children } = props;

  return (
    <div className="cursor-pointer text-tx-dark font-share-tech-mono hover:text-primary transition-colors duration-100">
      <span className="text-primary">[</span>{children}<span className="text-primary">]</span>
    </div>
  )
}

export default BracketWord