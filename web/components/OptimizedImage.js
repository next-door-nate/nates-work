import client from "../utils/client";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { useState, useEffect } from "react";
import { decode } from "blurhash";

export default function OptimizedImage({ image, blurHash }) {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    if (blurHash) {
      const canvas = document.createElement("canvas");
      const { width, height } = decode(blurHash, 32, 32);
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      const imageData = new ImageData(32, 32);
      imageData.data.set(decode(blurHash, 32, 32));
      ctx.putImageData(imageData, 0, 0);
      setPlaceholder(canvas.toDataURL());
    }
  }, [blurHash]);

  const imageProps = useNextSanityImage(client, image);

  if (image.alt == null || !image.alt) {
    image.alt = "Placeholder";
  }

  return (
    <>
      {placeholder ? (
        <Image
          {...imageProps}
          alt={image.alt}
          quality={90}
          placeholder={blurHash ? "blur" : "none"}
          blurDataURL={blurHash ? placeholder : null}
        />
      ) : (
        <Image {...imageProps} alt={image.alt} quality={90} />
      )}
    </>
  );
}
