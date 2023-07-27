import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
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
      title: 'title',
      event: 'faq.title',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
