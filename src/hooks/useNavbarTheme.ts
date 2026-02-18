import { useState, useEffect } from "react";

const REFERENCE_OFFSET = 40;

export function useNavbarTheme(options?: { isFooter?: boolean }) {
  const isFooter = options?.isFooter ?? false;
  const [isOverWhiteBackground, setIsOverWhiteBackground] = useState(false);
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

  useEffect(() => {
    const checkBackground = () => {
      const sections = document.querySelectorAll("section");
      const referenceY = isFooter
        ? window.innerHeight - REFERENCE_OFFSET
        : REFERENCE_OFFSET;
      let currentSection: Element | null = null;

      if (!currentSection) {
        for (const section of sections) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= referenceY && rect.bottom >= referenceY) {
            currentSection = section;
            break;
          }
        }
      }

      if (!currentSection && sections.length > 0) {
        const firstSection = sections[0];
        const rect = firstSection.getBoundingClientRect();

        if (window.scrollY === 0 || rect.top <= 0) {
          currentSection = firstSection;
        }
      }

      if (currentSection) {
        const hasWhiteBackground =
          currentSection.classList.contains("bg-background");
        setIsOverWhiteBackground(hasWhiteBackground);

        const sectionId = currentSection.id || null;
        setCurrentSectionId(sectionId);
      } else {
        setIsOverWhiteBackground(false);
        setCurrentSectionId(null);
      }
    };

    checkBackground();

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkBackground();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkBackground);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkBackground);
    };
  }, [isFooter]);

  return { isOverWhiteBackground, currentSectionId };
}
