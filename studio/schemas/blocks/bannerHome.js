export default {
  type: 'object',
  name: 'banner_home',
  title: 'Banner Home',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'rich_text',
      name: 'subtitle',
      title: 'Subtitle',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `Banner Home`,
        subtitle: title,
      }
    },
  },
}
