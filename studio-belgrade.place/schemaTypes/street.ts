import {defineField, defineType} from 'sanity'

// List of fields inside Street type:
const title = defineField({
    name: 'title',
    type: 'string',

    validation: (rule) => rule.required()
})

const slug = defineField({
    name: 'slug',
    type: 'slug',
    options: {source: 'title'},

    validation: (rule) => rule.required()
})

const category = defineField({
    name: 'categories',
    type: 'array',
    description: 'List of categories this street belongs',
    of: [
      {
        type: 'reference',
        to: [{ type: 'category' }]
      }
    ],

    validation: (rule) => rule.required()
})

const municipality = defineField({
    name: 'municipality',
    title: 'Municipality',
    type: 'array',
    of: [
      {
        type: 'reference',
        to: [{ type: 'municipality' }]
      }
    ],
    description: "Optional municipality this street belongs to",
})

const image = defineField({
    name: 'image',
    type: 'object',
    description: 'Optional: Image associated to this street',
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
    description: 'Optional: External URL for more information'
})

const publishDate = defineField({
    name: 'publishedAt',
    type: 'datetime',

    initialValue: () => new Date().toISOString(),
    validation: (rule) => rule.required(),
})

// Final 'street' type post
export const streetSchema = defineType({
  name: 'street',
  title: 'Street',
  type: 'document',
  fields: [
    title,
    slug,
    category,
    municipality,
    image,
    description,
    moreInfo,
    publishDate
  ],
})