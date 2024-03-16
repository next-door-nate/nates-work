import company from './company'

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
      type: 'rich_text',
      name: 'description',
      title: 'Description',
      group: 'main',
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
      type: 'array',
      name: 'roles',
      title: 'Roles',
      group: 'main',
      of: [
        {
          type: 'reference',
          name: 'role',
          title: 'Role',
          to: [{type: 'role'}],
        },
      ],
    },
    {
      type: 'array',
      name: 'tools',
      title: 'Tools',
      group: 'main',
      of: [
        {
          type: 'reference',
          name: 'tool',
          title: 'Tool',
          to: [{type: 'tool'}],
        },
      ],
    },
    {
      type: 'string',
      name: 'color',
      title: 'Color',
      group: 'main',
      description: 'basically any hex, rgba, hsl, oklab color can be used here',
    },
    {
      type: 'image',
      name: 'featured_image',
      title: 'Featured Image',
      group: 'main',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alt',
        },
      ],
    },
    {
      type: 'url',
      name: 'link',
      title: 'Link',
      group: 'main',
    },
    {
      type: 'blocks',
      title: 'Content',
      name: 'content',
      group: 'main',
    },
  ],
  preview: {
    select: {
      title: 'title',
      company: 'company.name',
    },
    prepare({title, company}) {
      return {
        title: company,
        subtitle: title,
      }
    },
  },
}
