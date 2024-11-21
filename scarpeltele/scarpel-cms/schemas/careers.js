import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'careers',
  title: 'Careers',
  type: 'document',
  fields: [
    defineField({
      name: 'careerAvatar',
      title: 'Career avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'aboutYou',
      title: 'About you',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      event: 'careers.title',
      media: 'careerAvatar',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
