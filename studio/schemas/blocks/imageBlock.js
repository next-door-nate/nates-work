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
      options: {
        hotspot: true,
      },
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
    {
      type: 'boolean',
      name: 'aspect_ratio',
      title: 'Intrisic Aspect Ratio',
      description: 'If you want this to infer the intrinsic size of the image',
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
  initialValue: {
    aspect_ratio: false,
    layout: 'normal',
  },
}
