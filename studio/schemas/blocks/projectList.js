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
          name: 'project',
          title: 'Project',
          to: [{type: 'project'}],
        },
      ],
    },
  ],
}
