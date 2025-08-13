import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'vimeoUrl',
      title: 'Vimeo URL',
      type: 'url',
      //   components: {
      //     input: VimeoBrowser as any,
      //   },
    }),
  ],
  //   preview: {
  //     select: {
  //       url: 'vimeoUrl',
  //     },
  //     prepare: ({url}) => ({
  //       title: url,
  //       media: VimeoBrowser,
  //     }),
  //   },
  // defineField({
  //   name: 'relatedVideos',
  //   title: 'Related Videos',
  //   type: 'array',
  //   of: [{type: 'reference', to: [{type: 'video'}]}],
  // }),
})
