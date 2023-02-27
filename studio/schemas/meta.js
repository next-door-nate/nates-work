export default {
  type: 'object',
  name: 'meta',
  title: 'Meta',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'text',
      name: 'description',
      title: 'Description',
      rows: 3,
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      description: 'Social Sharing Image Dimensions: 1200x627',
    },
  ],
}
