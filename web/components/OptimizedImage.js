import client from "../utils/client";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

export default function OptimizedImage({ image }) {
  const imageProps = useNextSanityImage(client, image);

  if (image.alt == null || !image.alt) {
    image.alt = "Placeholder";
  }

  return <Image {...imageProps} alt={image.alt} quality={100} />;
}
