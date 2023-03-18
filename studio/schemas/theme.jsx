export default {
  name: 'theme',
  title: 'Theme',
  icon: () => <span style={{fontSize: '1rem'}}>🏡</span>,
  type: 'document',
  fields: [
    {
      name: 'themeTitle',
      type: 'string',
      title: 'Theme Title',
    },
    {
      name: 'homepage',
      title: 'Homepage',
      description: 'Select the page you want to be the homepage on the marketing site.',
      type: 'reference',
      to: [{type: 'page'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'header_menu',
      title: 'Header',
      description:
        'Build complex menus from the menu area, assign them here to update the menu everywhere',
      type: 'reference',
      to: {type: 'header'},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'foote_menu',
      title: 'Footer',
      description:
        'Build complex menus from the module area, assign them here to update the menu everywhere',
      type: 'reference',
      to: {type: 'footer'},
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'themeTitle',
    },
    prepare: (selection) => {
      return {
        ...selection,
      }
    },
  },
}
