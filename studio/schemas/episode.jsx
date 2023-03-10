export default {
  type: 'document',
  name: 'episode',
  title: 'International Feel',
  icon: () => <span style={{fontSize: '1rem'}}>📻</span>,
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
      type: 'date',
      name: 'date',
      title: 'Air date',
      group: 'main',
    },
    {
      type: 'rich_text',
      name: 'description',
      title: 'Description',
      group: 'main',
    },
    {
      type: 'file',
      name: 'audio',
      title: 'Audio',
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
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      }
    },
  },
}
