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
