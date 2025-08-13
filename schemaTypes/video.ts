import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'imageVariations',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: false,
    }),
  ],
})
