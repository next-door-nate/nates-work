export default {
  type: 'document',
  name: 'tool',
  title: 'Tools',
  icon: () => <span style={{fontSize: '1rem'}}>🔬</span>,
  fields: [
    {
      type: 'string',
      name: 'title',
      titlt: 'title',
    },
    {
      type: 'url',
      name: 'link',
      title: 'Link',
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
