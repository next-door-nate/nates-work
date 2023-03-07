export default {
  name: 'globalConfig',
  _id: 'globalConfig',
  title: 'Global Config',
  icon: () => <span style={{fontSize: '1rem'}}>🌐</span>,
  type: 'document',
  groups: [
    {name: 'theme', title: 'Theme'},
    {name: 'staging', title: 'Staging'},
    {name: 'social', title: 'Social'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    {
      name: 'theme',
      title: 'Production Theme',
      type: 'reference',
      to: {type: 'theme'},
      validation: (Rule) => Rule.required(),
      group: 'theme',
    },
    // {
    //   name: 'stagingTheme',
    //   title: 'Staging Theme',
    //   description: 'This theme will deploy to any branch/deploy previews, easily view the whole theme while doing development',
    //   type: 'reference',
    //   to: { type: 'theme' },
    //   validation: Rule => Rule.required(),
    //   group: 'staging'
    // },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      group: 'social',
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
              type: 'string',
              name: 'url',
              title: 'Link to profile',
            },
          ],
        },
      ],
    },
    {
      type: 'meta',
      name: 'meta',
      title: 'Meta',
      group: 'seo',
    },
  ],
  preview: {
    prepare: () => ({title: 'Global Config'}),
  },
}
