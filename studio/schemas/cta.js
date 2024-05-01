export default {
  type: 'object',
  name: 'cta',
  title: 'CTA',
  fields: [
    {
      type: 'string',
      name: 'text',
      title: 'Text',
    },
    {
      type: 'reference',
      name: 'link',
      title: 'Link',
      to: [{type: 'page'}, {type: 'project'}],
    },
    {
      type: 'url',
      name: 'external_link',
      title: 'External Link',
      description: 'Using this field will override the reference above',
    },
    {
      type: 'object',
      name: 'tracking',
      title: 'Tracking',
      fields: [
        {
          type: 'string',
          name: 'analytics_id',
          title: 'Analytics ID',
        },
        {
          type: 'string',
          name: 'utm_params',
          title: 'UTM Parameters',
        },
      ],
    },
  ],
}
