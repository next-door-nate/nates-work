export default {
  type: 'document',
  name: 'footer',
  title: 'Footer',
  icon: () => <span style={{fontSize: '1rem'}}>🥾</span>,
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
    {
      type: 'array',
      name: 'social',
      title: 'Social',
      of: [
        {
          type: 'object',
          name: 'platform',
          title: 'Platform',
          fields: [
            {
              type: 'string',
              name: 'name',
              title: 'Name',
            },
            {
              type: 'url',
              name: 'link',
              title: 'Link',
            },
            {
              type: 'image',
              name: 'icon',
              title: 'Icon',
            },
            {
              type: 'boolean',
              name: 'show',
              title: 'Show on site?',
              initialValue: true,
            },
          ],
        },
      ],
    },
    {
      type: 'string',
      name: 'copyright',
      title: 'Copyright',
    },
  ],
}
