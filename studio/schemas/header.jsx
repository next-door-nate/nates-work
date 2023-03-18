export default {
  type: 'document',
  name: 'header',
  title: 'Header',
  icon: () => <span style={{fontSize: '1rem'}}>🤕</span>,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'nav',
      title: 'Navigation',
      of: [{type: 'nav_item'}],
    },
  ],
}
