import { useState, useEffect } from "react"

export function useNavbarTheme() {
  const [isOverWhiteBackground, setIsOverWhiteBackground] = useState(false)

  useEffect(() => {
    const checkBackground = () => {
      const sections = document.querySelectorAll("section")
      let currentSection: Element | null = null
            
      if (!currentSection) {
        for (const section of sections) {
          const rect = section.getBoundingClientRect()
          
          if (rect.top <= 40 && rect.bottom >= 40) {
            currentSection = section
            break
          }
        }
      }

      if (!currentSection && sections.length > 0) {
        const firstSection = sections[0]
        const rect = firstSection.getBoundingClientRect()

        if (window.scrollY === 0 || rect.top <= 0) {
          currentSection = firstSection
        }
      }

      if (currentSection) {
        const hasWhiteBackground = currentSection.classList.contains("bg-background")
        setIsOverWhiteBackground(hasWhiteBackground)
      } else {
        setIsOverWhiteBackground(false)
      }
    }

    checkBackground()
    
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkBackground()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", checkBackground)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkBackground)
    }
  }, [])

  return isOverWhiteBackground
}
