export default {
  type: 'document',
  name: 'friend',
  title: 'Friends',
  icon: () => <span style={{fontSize: '1rem'}}>🤝</span>,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
    },
    {
      type: 'rich_text',
      name: 'bio',
      title: 'Bio',
    },
    {
      type: 'url',
      type: 'link',
      title: 'Link',
    },
    {
      type: 'string',
      name: 'link_text',
      title: 'Link Text',
    },
  ],
}
