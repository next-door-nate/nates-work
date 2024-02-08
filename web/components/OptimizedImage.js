import client from "../utils/client";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

export default function OptimizedImage({ image, layout, width = "", height = "" }) {
  const imageProps = useNextSanityImage(client, image);

  if (layout === "fill") {
    delete imageProps.width;
    delete imageProps.height;
  }

  if (image.alt == null) {
    image.alt = "Placeholder";
  }

  return <Image {...imageProps} alt={image.alt} layout={layout} />;
}
