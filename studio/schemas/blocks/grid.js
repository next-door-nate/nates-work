export default {
  type: 'object',
  name: 'grid',
  title: 'Grid',
  fields: [
    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [
        {
          type: 'object',
          name: 'item',
          title: 'Item',
          fields: [
            {
              type: 'image',
              name: 'icon',
              title: 'Icon',
            },
            {
              type: 'string',
              name: 'title',
              title: 'Title',
            },
            {
              type: 'rich_text',
              name: 'rich_text',
              title: 'Text',
            },
            {
              type: 'image',
              name: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  type: 'string',
                  name: 'alt',
                  title: 'Alt text',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'string',
      name: 'column_count',
      title: 'Column count',
      description: 'How many items in the grid',
      options: {
        list: [
          {title: '2', value: '2'},
          {title: '3', value: '3'},
          {title: '4', value: '4'},
          {title: '5', value: '5'},
          {title: '6', value: '6'},
        ],
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Grid`,
      }
    },
  },
  initialValue: {
    column_count: '3',
  },
}
