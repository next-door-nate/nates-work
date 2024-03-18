export default {
  type: 'object',
  name: 'logo_garden',
  title: 'Logo Garden',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'logos',
      title: 'Logos',
      of: [
        {
          type: 'reference',
          name: 'company',
          title: 'Company',
          to: [{type: 'company'}],
        },
      ],
    },
  ],
}
