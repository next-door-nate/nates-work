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
import company from './company'
import logoGarden from './blocks/logoGarden'
import bannerPage from './blocks/bannerPage'
import projectList from './blocks/projectList'
import blog from './blog'
import skill from './skill'
import testimonial from './testimonial'

export const schemaTypes = [
  // document types
  page,
  project,
  blog,
  episode,
  company,
  skill,
  testimonial,
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
  bannerPage,
  twoUp,
  grid,
  richTextBlock,
  imageBlock,
  logoGarden,
  projectList,
]
