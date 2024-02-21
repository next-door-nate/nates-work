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
          {title: 'Full (has margin)', value: 'full'},
          {title: 'Bleed (no margin)', value: 'bleed'},
          {title: 'Normal', value: 'normal'},
          {title: 'Inset', value: 'inset'},
        ],
      },
    },
  ],
  preview: {
    select: {
      layout: 'layout',
    },
    prepare({layout}) {
      return {
        title: 'Image Block',
        subtitle: layout.charAt(0).toUpperCase() + layout.slice(1),
      }
    },
  },
}
