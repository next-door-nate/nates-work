import page from './page'
import project from './project'
import cta from './cta'
import meta from './meta'
import globalConfig from './globalConfig'
import theme from './theme'
import episode from './episode'
import richText from './richText'
import bannerHome from './blocks/bannerHome'
import navItem from './navItem'
import header from './header'
import footer from './footer'
import blocks from './blocks/blocks'
import section from './section'
import twoUp from './blocks/twoUp'
import grid from './blocks/grid'
import richTextBlock from './blocks/richTextBlock'
import imageBlock from './blocks/imageBlock'

export const schemaTypes = [
  // document types
  page,
  project,
  episode,
  globalConfig,
  header,
  footer,
  theme,

  // util types
  meta,
  cta,
  richText,
  navItem,

  // page builders
  blocks,
  section,

  // block types
  bannerHome,
  twoUp,
  grid,
  richTextBlock,
  imageBlock,
]
