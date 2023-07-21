import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96,
      },
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
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
      name: 'eventLogo',
      title: 'Event Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      event: 'events.title',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
