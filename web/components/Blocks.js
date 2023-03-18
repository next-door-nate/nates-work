import BannerHome from "./BannerHome";

export default function Blocks({ blocks }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block._type) {
            case "banner_home":
              return <BannerHome block={block} key={block._key} />;
          }

          return <p key={`noblockfound-` + i}>{block._type}</p>;
        })}
    </>
  );
}
