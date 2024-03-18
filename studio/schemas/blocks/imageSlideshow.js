export default {
  type: 'object',
  name: 'image_slideshow',
  title: 'Image Slideshow',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
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
    {
      type: 'array',
      name: 'images',
      title: 'Images',
      of: [
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
      ],
    },
  ],
}
