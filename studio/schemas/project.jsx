export default {
  type: 'document',
  name: 'project',
  title: 'Projects',
  icon: () => <span style={{fontSize: '1rem'}}>✨</span>,
  groups: [
    {name: 'main', title: 'Main', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    //
    // === Main ===
    //

    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'main',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'main',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'reference',
      name: 'company',
      title: 'Company',
      group: 'main',
      to: [{type: 'company'}],
    },
    {
      type: 'string',
      name: 'color',
      title: 'Color',
      description: 'basically any hex, rgba, hsl, oklab color can be used here',
    },
    {
      type: 'blocks',
      title: 'Content',
      name: 'content',
      group: 'main',
    },
    {
      type: 'meta',
      name: 'meta',
      group: 'seo',
    },
  ],
}
