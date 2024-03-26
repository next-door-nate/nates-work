export default {
  type: 'document',
  name: 'book',
  title: 'Books',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'rich_text',
      name: 'description',
      title: 'Description',
    },
    {
      type: 'array',
      name: 'dates_read',
      title: 'Dates read',
      of: [
        {
          type: 'date',
          name: 'date',
          title: 'Date',
        },
      ],
    },
  ],
}
