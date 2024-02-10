export default {
  type: 'object',
  name: 'image_block',
  title: 'Image Block',
  fields: [
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alt',
        },
      ],
    },
    {
      type: 'string',
      name: 'layout',
      title: 'Layout',
      options: {
        list: [
          {title: 'Full', value: 'full'},
          {title: 'Inset', value: 'inset'},
        ],
      },
    },
  ],
}
