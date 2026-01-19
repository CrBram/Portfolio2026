import { Link } from "react-router-dom"
import LinkButton from "./LinkButton"

const Nav = () => {
  const links = [
    { href: "#projects", label: "PROJECTS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <Link to="/">
            <img src="/images/BC_LOGO_WHITE.svg" alt="Logo" className="w-10 h-10" />
          </Link>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="md:hidden p-2 -m-2"
              aria-label="Open menu"
            >
              <img src="/images/hamburger_white.png" alt="" className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center gap-6">
              {
                links.map((link) => (
                  <LinkButton key={link.href} href={link.href}>{link.label}</LinkButton>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav