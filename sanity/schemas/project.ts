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
      name: 'link',
      type: 'string',
      title: 'Link',
    },
  ],
}
