export default {
  type: 'object',
  name: 'project_list',
  title: 'Project List',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'projects',
      title: 'Projects',
      of: [
        {
          type: 'reference',
          name: 'company',
          title: 'Company',
          to: [{type: 'company'}],
        },
      ],
    },
  ],
}
