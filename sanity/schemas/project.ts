export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'githubURL',
      type: 'string',
      title: 'GitHubURL',
    },
    {
      name: 'projectURL',
      type: 'string',
      title: 'ProjectURL',
    },
    {
      name: 'deployed',
      type: 'boolean',
      title: 'Deployed',
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{type: 'string'}],
    },
  ],
}
