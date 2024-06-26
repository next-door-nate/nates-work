import BannerHome from './BannerHome';
import Banner from './Banner';
import InfoGrid from './InfoGrid';
import Bento from './Bento';
import Section from './Section';
import TwoUp from './TwoUp';
import RichTextBlock from './RichTextBlock';
import LogoGarden from './LogoGarden';
import ImageBlock from './ImageBlock';
import ImageSlideshow from './ImageSlideshow';
import ContactBlock from './ContactBlock';
import ProjectList from './ProjectList';
import FooterCta from './FooterCta';
import WritingList from './WritingList';
import BookList from './BookList';
import FeaturedQuotes from './FeaturedQuotes';

export default function Blocks({ blocks, books }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block._type) {
            case 'banner_home':
              return <BannerHome block={block} key={block._key} />;
            case 'banner_page':
              return <Banner banner={block} key={block._key} />;
            case 'grid':
              return <InfoGrid infogrid={block} key={block._key} />;
            case 'bento':
              return <Bento bento={block} key={block._key} />;
            case 'section':
              return <Section section={block} key={block._key} books={books} />;
            case 'two_up':
              return <TwoUp two_up={block} key={block._key} />;
            case 'rich_text_block':
              return <RichTextBlock block={block} key={block._key} />;
            case 'logo_garden':
              return <LogoGarden garden={block} key={block._key} />;
            case 'image_block':
              return <ImageBlock block={block} key={block._key} />;
            case 'image_slideshow':
              return <ImageSlideshow slideshow={block} key={block._key} />;
            case 'contact_block':
              return <ContactBlock block={block} key={block._key} />;
            case 'project_list':
              return <ProjectList block={block} key={block._key} />;
            case 'writing_list':
              return <WritingList list={block} key={block._key} />;
            case 'book_list':
              return <BookList key={block._key} books={books} />;
            case 'featured_quotes':
              return <FeaturedQuotes key={block._key} block={block} />;
            case 'footer_cta':
              return (
                <FooterCta
                  key={block._key}
                  // prettier-ignore
                  title="Let&apos;s talk"
                  subtitle="Have something in mind? Reach out and we can talk about what your project looks like."
                  button="Start a project"
                />
              );
          }

          return <p key={`noblockfound-` + i}>{block._type}</p>;
        })}
    </>
  );
}
