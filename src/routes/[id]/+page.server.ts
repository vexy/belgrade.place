import type { PageServerLoad } from './$types';
import { streetForSlug } from '#lib/queries.ts';

export const load = (async ({ params: { id }, locals: { sanity: { client } } }) => {
    // console.debug("Current street slug:", id)
    const query = streetForSlug(id);
    const street_object = await client.fetch(query)
    // console.debug("Returned street is:", street_object)
    
    return {
        street: street_object
    };
}) satisfies PageServerLoad;