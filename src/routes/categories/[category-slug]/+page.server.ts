import { streetsForCategory } from '#lib/queries.ts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals: { sanity: {client}}  }) => {
    const slug = params['category-slug']
    // console.debug("Category slug: ", slug)

    const query = streetsForCategory(slug)
    const streets = await client.fetch(query);

    return {
        streets
    };
}) satisfies PageServerLoad;