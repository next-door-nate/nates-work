export const headerQuery = `
  nav[]{
    _key,
    'link':{
      title,
      "_type": page->_type,
      "slug": page->slug,
      external_link,
      linklist[]{
        _key,
        "link": {
          'title': subLink.title,
        }
      }
    },
  },
`;

export const footerQuery = `
  nav[]{
    _key,
  }
`;

export const globalConfigQuery = `
*[_type == "globalConfig"][0]{
  
  'header': theme->header_menu-> {
    ${headerQuery}
  },
  'footer': ${footerQuery},
  theme->{
    ...
  },
}
`;

export const blocksQuery = `
_type,
_key,

_type == "banner_home" => {
  title,
  subtitle,
},

`;

export const pageQuery = `
  title,
  slug,
  "blocks": blocks[]{
    ${blocksQuery}
  }
`;
