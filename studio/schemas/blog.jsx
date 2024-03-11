export default {
  type: 'document',
  name: 'blog',
  title: 'Writing',
  icon: () => <span style={{fontSize: '1rem'}}>✏</span>,
  groups: [
    {name: 'main', title: 'Main', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    //
    // === Main ===
    //

    {
      type: 'string',
      name: 'title',
      title: 'Title',
      group: 'main',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'main',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'date',
      name: 'date',
      title: 'Publish Date',
      group: 'main',
    },
    {
      type: 'image',
      name: 'featured_image',
      title: 'Featured Image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Alt text',
        },
      ],
    },
    {
      type: 'rich_text',
      name: 'description',
      title: 'Description',
      group: 'main',
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

  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({title, date}) {
      var formattedDate = new Date(date)
      return {
        title: title,
        subtitle: formattedDate.toLocaleDateString('en-ca', {
          timeZone: 'UTC',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      }
    },
  },
}
