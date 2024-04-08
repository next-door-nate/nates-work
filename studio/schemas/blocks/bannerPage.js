export default {
  type: 'object',
  name: 'banner_page',
  title: 'Banner Page',
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
      type: 'string',
      name: 'eyebrow',
      title: 'Eyebrow',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `Banner Page`,
        subtitle: title,
      }
    },
  },
}
