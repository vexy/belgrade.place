import {defineField, defineType} from 'sanity'

// List of fields inside Street type:
const title = defineField({
    name: 'title',
    type: 'string',

    validation: (rule) => rule.required(),
})

const slug = defineField({
    name: 'slug',
    type: 'slug',
    options: {source: 'title'},

    validation: (rule) => rule.required(),
})

const category = defineField({
    name: 'category',
    type: 'string',
    options: {
      list: [
        { title: 'Historical figure', value: 'historical-figure' },
        { title: 'Geographical place', value: 'geo-place' },
        { title: 'Significant date', value: 'significant-date' },
      ],
      layout: 'radio'
    }
})

const image = defineField({
    name: 'image',
    type: 'object',
    fields: [
      defineField({
        name: 'image_url',
        type: 'url'
      }),

      defineField({
        name: 'attribution',
        type: 'string',
      })
    ]
})

const description = defineField({
    name: 'description',
    type: 'array',
    of: [{type: 'block'}],

    validation: (rule) => rule.required()
})

const moreInfo = defineField({
    name: 'see_more',
    type: 'url',
    description: 'External URL for more information'
})

const publishDate = defineField({
    name: 'publishedAt',
    type: 'datetime',

    initialValue: () => new Date().toISOString(),
    validation: (rule) => rule.required(),
})

// Final 'street' type post
export const streetType = defineType({
  name: 'street',
  title: 'Street',
  type: 'document',
  fields: [
    title,
    slug,
    category,
    image,
    description,
    moreInfo,
    publishDate
  ],
})