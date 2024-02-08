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

_type == "two_up" => {
  title,
  text,
  eyebrow,
  image,
  reverse,
},

_type == "grid" => {
  title,
  eyebrow,
  text,
  items[]{
    _key,
    title,
    icon,
    image,
    eyebrow,
    rich_text,
  },
}

`;

export const sectionQuery = `

_type=="section" => {
  theme,
  "blocks": blocks[]{
    ${blocksQuery}
  }
}

`;

export const pageQuery = `
  title,
  slug,
  "blocks": blocks[]{
    ${blocksQuery},
    ${sectionQuery}
  }
`;
