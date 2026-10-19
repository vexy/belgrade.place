import type { PageServerLoad } from './$types';
import { streetDetails } from '#lib/queries.ts';

export const load = (async ({ locals: {sanity} }) => {
    const {client, previewEnabled} = sanity
    const options = {stega: previewEnabled}
    const page = await client.fetch(streetDetails, {}, options)

    console.debug("All page data: ", page)

    return {
        page
    }
}) satisfies PageServerLoad;