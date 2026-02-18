import { Link } from "react-router-dom"
import LinkButton from "./LinkButton"
import { useNavbarTheme } from "@/hooks/useNavbarTheme"

const Nav = () => {
  const { isOverWhiteBackground, currentSectionId } = useNavbarTheme()

  const links = [
    { href: "#projects", label: "PROJECTS", activeTags: ["selected-projects", "all-projects"] },
    { href: "#skills", label: "SKILLS", activeTags: ["skills"] },
    { href: "#contact", label: "CONTACT", activeTags: ["contact"] },
  ]

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-200`}
    >
      <div className="container">
        <div className="flex items-center justify-between pt-5">
          <Link to="#hero" onClick={(e) => handleHashClick(e, "#hero")}>
            {isOverWhiteBackground ? (
              <img src="/images/BC_LOGO_DARK.svg" alt="Logo" className="w-10 h-10 transition-all duration-200" />
            ) : (
              <img src="/images/BC_LOGO_WHITE.svg" alt="Logo" className="w-10 h-10 transition-all duration-200" />
            )}
          </Link>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="md:hidden p-2 -m-2"
              aria-label="Open menu"
            >
              <img
                src="/images/hamburger_white.png"
                alt=""
                className={`w-6 h-6 transition-all duration-200 ${isOverWhiteBackground ? "brightness-0" : ""}`}
              />
            </button>
            <div className="hidden md:flex items-center gap-6">
              {
                links.map((link) => {
                  const isActive = currentSectionId ? link.activeTags.includes(currentSectionId) : false
                  return (
                    <LinkButton
                      key={link.href}
                      href={link.href}
                      isDarkText={isOverWhiteBackground}
                      isActive={isActive}
                    >
                      {link.label}
                    </LinkButton>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav