import { streetsForMunicipality } from '#lib/queries.ts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals: { sanity: { client } } }) => {
    const slug = params['municipality-slug']

    const finalQuery = streetsForMunicipality(slug);
    const streets = await client.fetch(finalQuery);
    // console.debug("Data is:", streets)

    return {
        streets
    };
}) satisfies PageServerLoad;