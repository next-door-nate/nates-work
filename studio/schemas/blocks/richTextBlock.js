export default {
  type: 'object',
  name: 'rich_text_block',
  title: 'Rich Text Block',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'string',
      name: 'eyebrow',
      title: 'Eyebrow',
    },
    {
      type: 'rich_text',
      name: 'rich_text',
      title: 'Rich Text',
    },
  ],
}
