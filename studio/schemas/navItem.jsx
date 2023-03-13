export default {
  name: 'nav_item',
  title: 'Nav Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'page',
      title: 'Link',
      type: 'reference',
      to: [{type: 'page'}, {type: 'project'}, {type: 'episode'}],
    },
    {
      name: 'external_link',
      title: 'External link',
      type: 'url',
      description: 'This will override the page selection above.',
      placeholder: 'example: https://google.com',
    },
    {
      name: 'linklist',
      type: 'array',
      title: 'Sub Navigation',
      of: [
        {
          type: 'object',
          title: 'Sub Link',
          name: 'subLink',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'page',
              title: 'Link',
              type: 'reference',
              to: [{type: 'page'}, {type: 'project'}, {type: 'episode'}],
            },
            {
              name: 'external_link',
              title: 'External link',
              type: 'url',
              description: 'This will override the page selection above.',
              placeholder: 'example: https://google.com',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
