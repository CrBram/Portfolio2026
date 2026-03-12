import { useEffect } from "react";

interface ImageLightboxProps {
  title: string;
  images: string[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function ImageLightbox({
  title,
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: ImageLightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        onPrevious();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, onClose, onPrevious, onNext]);

  if (activeIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background-dark/95 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image lightbox`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 md:right-8 md:top-8 h-10 w-10 border border-tx-light/30 bg-background-dark/70 text-tx-light hover:border-primary hover:text-primary transition-colors duration-100 cursor-pointer"
        aria-label="Close lightbox"
      >
        x
      </button>

      <div
        className="mx-auto h-full w-full max-w-6xl flex items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={images[activeIndex]}
          alt={`${title} screenshot ${activeIndex + 1}`}
          className="max-h-[86vh] w-auto max-w-full object-contain border border-tx-light/15"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 border border-tx-light/30 bg-background-dark/70 text-tx-light hover:border-primary hover:text-primary transition-colors duration-100 cursor-pointer flex items-center justify-center"
            aria-label="Previous image"
          >
            <span
              aria-hidden="true"
              className="inline-block h-4 w-4 bg-current [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] -rotate-90"
              style={{
                maskImage: "url(/images/icons/up_icon.svg)",
                WebkitMaskImage: "url(/images/icons/up_icon.svg)",
              }}
            />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 border border-tx-light/30 bg-background-dark/70 text-tx-light hover:border-primary hover:text-primary transition-colors duration-100 cursor-pointer flex items-center justify-center"
            aria-label="Next image"
          >
            <span
              aria-hidden="true"
              className="inline-block h-4 w-4 bg-current [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] rotate-90"
              style={{
                maskImage: "url(/images/icons/up_icon.svg)",
                WebkitMaskImage: "url(/images/icons/up_icon.svg)",
              }}
            />
          </button>
        </>
      )}
    </div>
  );
}

export default ImageLightbox;
