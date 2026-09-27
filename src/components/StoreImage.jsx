import { useState } from "react";
import placeholder from "../assets/kit-placeholder.svg";

export default function StoreImage({ src, alt, className, ...props }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt}
      className={className}
      onError={() => setImageSrc(placeholder)}
    />
  );
}
