import { Link } from "react-router-dom"

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  isDarkText?: boolean;
}

const LinkButton = (props: LinkButtonProps) => {
  const { href, children, isDarkText = false } = props;

  return (
    <Link to={href} className={`${isDarkText ? "text-tx-dark" : "text-tx-light"} font-share-tech-mono hover:text-primary transition-colors duration-100`}>
      <span className="text-primary">[</span>{children}<span className="text-primary">]</span>
    </Link>
  )
}

export default LinkButton