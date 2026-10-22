import {defineQuery} from '@sanity/sveltekit'

// Returns all available categories and their slugs
export const allCategories = defineQuery(
    `*[_type == "category"] {
        "title": title,
        "slug": slug.current
    }`
)

// Returns all available municipalities
export const allMunicipalities = defineQuery(
    `*[_type == "municipality"] | order(title asc) {
        _id,
        title,
        "slug": slug.current,
        badges{
            flag,
            coat
        }
    }`
)

// Returns street for given municipality slug
export function streetsForMunicipality(slug: string) {
    return defineQuery(`
        *[_type == "street" && '${slug}' in municipality[]->slug.current] {
            _id,
            title,
            image,
            "slug": slug.current
        }`)
}

// Returns streets for given category slug
export function streetsForCategory(slug: string) {
    return defineQuery(`
        *[_type == "street" && '${slug}' in categories[]->slug.current] {
            _id,
            title,
            "slug": slug.current
        }
    `)
}

// Returns a street for given street slug
export function streetForSlug(slug: string) {
    return defineQuery(`
        *[_type == "street" && slug.current == '${slug}'][0] {
            _id,
            title,
            description,
            image,
            categories[] -> {
                title,
                "slug": slug.current
            },
            municipality[] -> {
                title,
                "slug": slug.current,
                badges{
                    flag,
                    coat
                }
            },
            "slug": slug.current,
            see_more
        }
    `)
}

export function streetsForSearchTerm(term: string) {
    return defineQuery(
        `
            *[_type == "street" && title match "*${term}*"] {
                title,
                "slug": slug.current
            }
        `
    )
}