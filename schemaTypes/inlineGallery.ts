import {defineField} from 'sanity'

export default {
  name: 'inlineGallery',
  title: 'Inline Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string',
      description: 'Optional name for the gallery',
      validation: (Rule) =>
        Rule.max(30).warning('Ensure galleryTitle is no longer than 30 characters'),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [{type: 'mediaAsset'}],
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(10)
          .error(
            'A media asset is required, and you can add minimum 2 to maximum 10 assets to the carousel.',
          ),
    }),
    defineField({
      name: 'caption',
      title: 'Image/Video Caption',
      type: 'string',
      description: 'Add a caption describing the image or video.',
      validation: (Rule) =>
        Rule.max(80).warning('Ensure captions are no longer than 80 characters.'),
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: false,
    }),
  ],
}
