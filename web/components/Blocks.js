import BannerHome from "./BannerHome";
import Banner from "./Banner";
import InfoGrid from "./InfoGrid";
import Bento from "./Bento";

export default function Blocks({ blocks }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block._type) {
            case "banner_home":
              return <BannerHome block={block} key={block._key} />;
            case 'banner':
              return <Banner banner={block} key={block._key} />;
            case 'info_grid':
              return <InfoGrid infogrid={block} key={block._key} />;
            case 'bento':
              return(
                <Bento bento={block} key={block._key} />
              );
          }

          return <p key={`noblockfound-` + i}>{block._type}</p>;
        })}
    </>
  );
}