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

const description = defineField({
    name: 'description',
    type: 'string',
    description: 'Optional description of the category'
})


// Final 'street' type post
export const categorySchema = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    title,
    slug,
    description
  ]
})