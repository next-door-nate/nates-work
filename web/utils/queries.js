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

_type == "banner_page" => {
  title,
  text,
},

_type == "two_up" => {
  title,
  text,
  eyebrow,
  image,
  reverse,
  intrinsic_height,
  "blurHash": image.asset->metadata.blurHash,
  "lqip": image.asset->metadata.lqip,
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
    "blurHash": image.asset->metadata.blurHash,
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
  "blurHash": image.asset->metadata.blurHash,
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
},

_type == "contact_block" => {
  title,
  text,
},

_type == "project_list" => {
  title,
  projects[]->{
    title,
    slug,
    featured_image,
    "blurHash": featured_image.asset->metadata.blurHash,
    _type,
    company->,
    tools[]->{
      title,
    },
    roles[]->{
      title,
    },
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
  "blurHash": featured_image.asset->metadata.blurHash,
  link,
  link_text,
  roles[]->{title},
  tools[]->{title,link},
  "content": content[]{
    ${blocksQuery},
    ${sectionQuery}
  }
`;
