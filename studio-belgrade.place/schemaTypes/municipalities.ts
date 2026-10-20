import {defineField, defineType} from 'sanity'

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

const badges = defineField({
    name: 'badges',
    type: 'object',
    description: 'Optional flag of municipality',
    fields: [
      defineField({
        name: 'flag',
        type: 'url',
        description: "URL of the municipality flag"
      }),

      defineField({
        name: 'coat',
        type: 'url',
        description: "URL of the municipality coat-of-arms"
      })
    ]
})


// Final 'municipality' type post
export const municipalitySchema = defineType({
  name: 'municipality',
  title: 'Municipalities',
  type: 'document',
  fields: [
    title,
    slug,
    badges
  ]
})