import {defineField, defineType} from 'sanity'

export default {
  name: 'mediaAsset',
  title: 'Media Asset',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orientation',
      title: 'Image Orientation',
      type: 'string',
      options: {
        list: [
          {title: 'Landscape (16:9)', value: 'landscape'},
          {title: 'Portrait (4:3)', value: 'portrait'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().warning('Images will be cropped'),
      hidden: ({parent}) => parent.mediaType !== 'image',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'reference',
      to: {type: 'video'},
      hidden: ({parent}) => parent.mediaType !== 'video',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.mediaType === 'video') {
            return value ? true : 'Video is required'
          }
          return true
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: false,
    }),
  ],
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (fields && !fields.image && !fields.video) {
        return 'Either Image or Video is required.'
      }
      return true
    }),
}
