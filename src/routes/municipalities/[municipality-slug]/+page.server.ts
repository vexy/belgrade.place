import { streetsForMunicipality } from '#lib/queries.ts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals: { sanity: { client } } }) => {
    const slug = params['municipality-slug']
    console.debug("Muni slug is:", slug)

    const finalQuery = streetsForMunicipality(slug);
    console.debug("Query: ", finalQuery)
    const streets = await client.fetch(finalQuery);
    console.debug("Data is:", streets)

    return {
        streets
    };
}) satisfies PageServerLoad;