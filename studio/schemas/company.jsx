export default {
  type: 'document',
  name: 'company',
  title: 'Company',
  icon: () => <span style={{fontSize: '1rem'}}>👔</span>,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
    },
    {
      type: 'image',
      name: 'logo',
      title: 'Image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alt',
        },
      ],
    },
  ],
}
