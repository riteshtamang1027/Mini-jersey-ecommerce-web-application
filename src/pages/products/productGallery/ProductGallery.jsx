import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProductGallery({ images, tag }) {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">

      {/* Thumbnails */}
      <div className="flex gap-2 sm:w-[64px] sm:flex-col">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setActiveImage(index)}
            className={`
              h-14 w-14 overflow-hidden rounded-md border
              bg-white sm:h-16 sm:w-16
              ${
                activeImage === index
                  ? "border-[#b8ff00]"
                  : "border-[#dfe3df]"
              }
            `}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative aspect-square flex-1 overflow-hidden rounded-lg border border-[#dfe3df] bg-white">

        <span className="absolute left-4 top-4 z-10 bg-[#b8ff00] px-2 py-1 text-[9px] font-black uppercase">
          {tag}
        </span>

        <img
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="h-full w-full object-cover"
        />

        {/* Previous */}
        <button
          onClick={previousImage}
          className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
        >
          <ChevronLeft size={15} />
        </button>

        {/* Next */}
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}

export default ProductGallery;
