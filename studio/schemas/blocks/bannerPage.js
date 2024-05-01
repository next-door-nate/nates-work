export default {
  type: 'object',
  name: 'banner_page',
  title: 'Banner Page',
  fields: [
    {
      type: 'string',
      name: 'eyebrow',
      title: 'Eyebrow',
    },
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
      type: 'array',
      name: 'ctas',
      title: 'CTAs',
      of: [{type: 'cta'}],
    },
    {
      type: 'array',
      name: 'featured_area',
      title: 'Featured Area',
      of: [
        {
          type: 'banner_image',
        },
      ],
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
