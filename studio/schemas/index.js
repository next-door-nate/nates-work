import page from './page'
import project from './project'
import cta from './cta'
import meta from './meta'
import globalConfig from './globalConfig'
import theme from './theme'
import episode from './episode'
import richText from './richText'
import pageContent from './pageContent'
import bannerHome from './bannerHome'
import navItem from './navItem'
import header from './header'
import footer from './footer'

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
  pageContent,

  // block types
  bannerHome,
]
