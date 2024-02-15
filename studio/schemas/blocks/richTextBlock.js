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
    {
      type: 'boolean',
      name: 'center',
      title: 'Center?',
    },
    {
      type: 'string',
      name: 'width',
      title: 'Width',
      options: {
        list: [
          {title: 'Full', value: 'full'},
          {title: 'Medium', value: 'medium'},
          {title: 'Small', value: 'small'},
        ],
      },
    },
  ],
}
