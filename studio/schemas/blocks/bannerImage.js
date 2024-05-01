export default {
  type: 'object',
  name: 'banner_image',
  title: 'Banner Image',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alt text',
        },
      ],
    },
  ],
}
