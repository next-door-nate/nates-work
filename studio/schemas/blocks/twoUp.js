export default {
  type: 'object',
  name: 'two_up',
  title: 'Two Up',
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
      type: 'image',
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alt text',
        },
      ],
    },
    {
      type: 'cta',
      name: 'cta',
      title: 'CTA',
    },
    {
      type: 'boolean',
      name: 'reverse',
      title: 'Reverse layout?',
    },
    {
      type: 'boolean',
      name: 'intrinsic_height',
      title: 'Intrinsic height?',
    },
  ],
  initialValue: {
    reverse: false,
    intrinsic_height: false,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `Two Up`,
        subtitle: title,
      }
    },
  },
}
