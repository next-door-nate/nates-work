import Head from "next/head";
import linkResolver from "../utils/linkResolver";

export default function HeadMeta({ meta }) {
  return (
    <Head>
      {meta?.title && (
        <>
          <title key="title">{meta.title}</title>
          <meta property="og:title" content={meta.title} key="og-title" />
        </>
      )}

      {meta?.description && (
        <>
          <meta name="description" content={meta.description} key="description" />
          <meta property="og:description" content={meta.description} />
        </>
      )}

      {meta?.canonical && (
        <>
          <meta
            property="og:url"
            content={`https://nates.work` + linkResolver(meta.canonical)}
            key="og-url"
          />
          <link rel="canonical" href={`https://nates.work` + linkResolver(meta.canonical)} />
        </>
      )}

      {meta?.image && <meta property="og:image" content="/default-og-image.png" key="og-image" />}

      <meta property="og:site_name" content="Nate's Work" key="og-site-name" />
      <meta property="og:type" content="website" key="og-type" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
