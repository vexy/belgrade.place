import {defineQuery} from '@sanity/sveltekit'

export const streetOverview = defineQuery(
    `*[_type == "street"]{ _id, title }`
)

export const streetDetails = defineQuery(
    `*[_type == "street"]{
        _id,
        title,
        slug,
        category,
        image,
        description,
        see_more
    }`
)