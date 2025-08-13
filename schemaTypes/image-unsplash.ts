import {defineField} from 'sanity'

export default {
  name: 'unsplash',
  type: 'document',
  title: 'Unsplash Image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      title: 'name',
      media: 'image',
    },
  },
}
