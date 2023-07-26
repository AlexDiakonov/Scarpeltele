export default defineType({
  name: 'FAQ',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'FAQ',
      faq: 'FAQ.title',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
