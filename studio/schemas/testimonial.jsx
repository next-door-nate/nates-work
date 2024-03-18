export default {
  type: 'document',
  name: 'testimonial',
  title: 'Testimonial',
  icon: () => <span style={{fontSize: '1rem'}}>🗣️</span>,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
    },
    {
      type: 'string',
      name: 'title',
      title: 'Job Title',
    },
    {
      type: 'reference',
      name: 'company',
      title: 'Company',
      to: [{type: 'company'}],
    },
    {
      type: 'rich_text',
      name: 'quote',
      title: 'Quote',
    },
  ],
  preview: {
    select: {
      name: 'name',
      title: 'title',
    },
    prepare({name, title}) {
      return {
        title: name,
        subtitle: title,
      }
    },
  },
}
