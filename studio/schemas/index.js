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

export const schemaTypes = [
  // document types
  page,
  project,
  episode,

  // settings types
  globalConfig,
  theme,

  // util types
  meta,
  cta,
  richText,

  // page builders
  pageContent,

  // block types
  bannerHome,
]
