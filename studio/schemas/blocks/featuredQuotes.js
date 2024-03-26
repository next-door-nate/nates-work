export default {
  type: 'object',
  name: 'featured_quotes',
  title: 'Featured Quotes',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'quotes',
      title: 'Quotes',
      of: [
        {
          type: 'reference',
          name: 'quote',
          title: 'Quote',
          to: [{type: 'testimonial'}],
        },
      ],
    },
  ],
}
