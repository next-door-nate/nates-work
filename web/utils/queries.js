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
  social[]{
    _key,
    name,
    link,
    'icon': icon.asset->url,
  },
  copyright,
`;

export const globalConfigQuery = `
*[_type == "globalConfig"][0]{
  
  'header': theme->header_menu-> {
    ${headerQuery}
  },
  'footer': theme->footer_menu-> {
    ${footerQuery}
  },
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
},

_type == "rich_text_block" => {
  title,
  rich_text,
  eyebrow,
},


_type == "image_block" => {
  image,
  layout,
  aspect_ratio,
},

_type == "image_slideshow" => {
  layout,
  aspect_ratio,
  images[],
},

_type == "logo_garden" => {
  title,
  logos[]{
    _key,
    "name": @->name,
    "logo": @->logo,
  },
}


`;

export const sectionQuery = `

_type=="section" => {
  theme,
  "blocks": blocks[]{
    ${blocksQuery}
  },
  pad_top,
  pad_bottom,
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

export const projectQuery = `
  slug,
  title,
  description,
  featured_image,
  link,
  roles[]->{title},
  tools[]->{title,link},
  "content": content[]{
    ${blocksQuery},
    ${sectionQuery}
  }
`;
