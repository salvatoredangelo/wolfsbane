import FionaPlaceholder from "part:sanity-plugin-asset-source/fiona-placeholder"

export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
    sources: [FionaPlaceholder]
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
