import page from './page'
import project from './project'
import cta from './cta'
import meta from './meta'
import globalConfig from './globalConfig'
import theme from './theme'

export const schemaTypes = [
  // document types
  page,
  project,

  // settings types
  globalConfig,
  theme,

  // non-doc types
  meta,
  cta,
]
