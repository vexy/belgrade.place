import type { PageServerLoad } from './$types';
import { streetsForSearchTerm } from '#lib/queries.ts';

export const load = (async ({ locals: { sanity: { client } }, url }) => {
    const params = url.searchParams
    // console.debug("Search parameters are: ", params )
    const title = params.get('q') as string;

    const query = streetsForSearchTerm(title);
    const streets = await client.fetch(query);

    return {
        streets
    };
}) satisfies PageServerLoad;
