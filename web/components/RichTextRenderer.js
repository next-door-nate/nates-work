import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "../utils/serializers";

export default function RichTextRenderer({ blocks }) {
  return <BlockContent blocks={blocks} serializers={serializers} />;
}
