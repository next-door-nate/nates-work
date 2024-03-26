export default {
  type: 'object',
  name: 'footer_cta',
  title: 'Footer CTA',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'rich_text',
      name: 'text',
      title: 'Text',
    },
    {
      type: 'cta',
      name: 'cta',
      title: 'CTA',
    },
  ],
}
