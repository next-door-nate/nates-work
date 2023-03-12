export const pageQuery = `
  title,
  slug,
`;

export const blocksQuery = `

_type == "home_banner" => {
  title,
},

`;
