import { Link } from "react-router-dom"

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  isDarkText?: boolean;
  isActive?: boolean;
}

const LinkButton = (props: LinkButtonProps) => {
  const { href, children, isDarkText = false, isActive = false } = props;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={`${isActive
        ? "text-primary"
        : isDarkText
          ? "text-tx-dark"
          : "text-tx-light"
        } font-share-tech-mono hover:text-primary transition-colors duration-100 text-sm md:text-base`}
    >
      <span className="text-primary">[</span>{children}<span className="text-primary">]</span>
    </Link>
  )
}

export default LinkButton