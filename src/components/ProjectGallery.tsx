import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ProjectGalleryProps {
  title: string;
  images: string[];
  imagesPerView?: number;
  className?: string;
}

function ProjectGallery({
  title,
  images,
  imagesPerView = 3,
  className,
}: ProjectGalleryProps) {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: imagesPerView,
    containScroll: "trimSnaps",
  });

  if (images.length === 0) return null;

  const updateCarouselState = () => {
    if (!emblaApi) return;
    setSelectedSnap(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;

    updateCarouselState();
    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", updateCarouselState);

    return () => {
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", updateCarouselState);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
    updateCarouselState();
  }, [images, emblaApi]);

  const totalSlides = scrollSnaps.length || 1;
  const currentStartIndex = selectedSnap * imagesPerView + 1;
  const currentEndIndex = Math.min(currentStartIndex + imagesPerView - 1, images.length);

  const goToPreviousImage = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const goToNextImage = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <p className="font-share-tech-mono uppercase text-sm text-tx-light-subtle">
          GALLERY
        </p>
        <p className="font-share-tech-mono uppercase text-xs text-tx-light-subtle">
          {String(currentEndIndex).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </p>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-3 flex">
          {images.map((src, index) => (
            <div key={`${src}-${index}`} className="pl-3 basis-1/3 shrink-0 grow-0 min-w-0">
              <div className="relative overflow-hidden h-[22vh] md:h-[32vh] bg-background-dark rounded-sm border border-tx-light/10">
                <img
                  src={src}
                  alt={`${title} screenshot ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPreviousImage}
              disabled={!canScrollPrev}
              className="h-8 w-8 border border-tx-light/20 bg-background-dark/50 text-tx-light enabled:hover:border-primary/70 enabled:hover:text-primary transition-colors duration-100 flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous image"
            >
              <span
                aria-hidden="true"
                className="inline-block h-3.5 w-3.5 bg-current [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] -rotate-90"
                style={{
                  maskImage: "url(/images/icons/up_icon.svg)",
                  WebkitMaskImage: "url(/images/icons/up_icon.svg)",
                }}
              />
            </button>
            <button
              type="button"
              onClick={goToNextImage}
              disabled={!canScrollNext}
              className="h-8 w-8 border border-tx-light/20 bg-background-dark/50 text-tx-light enabled:hover:border-primary/70 enabled:hover:text-primary transition-colors duration-100 flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next image"
            >
              <span
                aria-hidden="true"
                className="inline-block h-3.5 w-3.5 bg-current [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] rotate-90"
                style={{
                  maskImage: "url(/images/icons/up_icon.svg)",
                  WebkitMaskImage: "url(/images/icons/up_icon.svg)",
                }}
              />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1.5 w-6 transition-colors duration-100 cursor-pointer ${selectedSnap === index ? "bg-primary" : "bg-tx-light/30 hover:bg-tx-light/50"}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
