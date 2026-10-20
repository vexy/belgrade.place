import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { sanity: { client } }, url }) => {
    const params = url.searchParams
    // console.debug("Search parameters are: ", params )
    const title = params.get('q') as string;

    const query = `
        *[_type == "street" && title match "*${title}*"] { 
            _id,
            title,
            slug,
            category->{
                title,
                slug
            },
            image,
            description,
            see_more
        }
    `
    const streets = await client.fetch(query);

    return {
        streets
    };
}) satisfies PageServerLoad;