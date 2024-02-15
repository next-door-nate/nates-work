export default {
  type: 'document',
  name: 'skills',
  title: 'Skills',
  icon: () => <span style={{fontSize: '1rem'}}>🛠</span>,
  fields: [
    {
      type: 'string',
      name: 'title',
      titlt: 'title',
    },
    {
      type: 'image',
      name: 'icon',
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
