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
  eyebrow,
},

_type == "two_up" => {
  title,
  text,
  eyebrow,
  image,
  _type,
  reverse,
  intrinsic_height,
  "blurHash": image.asset->metadata.blurHash,
  "lqip": image.asset->metadata.lqip,
},

_type == "grid" => {
  title,
  eyebrow,
  subtitle,
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
  center,
  classic,
  width,
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
  images[]{
    ...,
    "blurHash": asset->metadata.blurHash,
  },
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
  projects[]{
    _key,
    "title": @->title,
    "slug": @->slug,
    "featured_image": @->featured_image,
    "blurHash": @->featured_image.asset->metadata.blurHash,
    "_type": @->_type,
    "company": @->company->,
    "tools": @->tools[]{
      _key,
      "title": @->title,
    },
    "roles": @->roles[]{
      _key,
      "title": @->title,
    },
  },
},

_type == "writing_list" => {
  title,
  
  "posts": *[_type=="blog"]{
    _id,
    _key,
    title,
    date,
    description,
    featured_image,
    "blurHash": featured_image.asset->metadata.blurHash,
    content,
    meta,
  }
},

_type == "featured_quotes" => {
  title,
  "quotes": quotes[]{
    _key,
    "quote": @->{
      quote,
      name,
      title,
      company->{
        name
      }
    },
  }
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
  },
  meta{
    title,
    description,
    image,
    "canonical": {
      "_type": ^._type,
      "slug": ^.slug,
    },
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
  "tools": tools[]{
    _key,
    "title": @->title,
    "link": @->link,
  },
  "roles": roles[]{
    _key,
    "title": @->title,
    "link": @->link,
  },
  "content": content[]{
    ${blocksQuery},
    ${sectionQuery}
  }
`;
