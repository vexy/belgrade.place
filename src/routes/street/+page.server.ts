import type { PageServerLoad } from './$types';
import { pageQuery } from '#lib/queries.ts';

export const load = (async ({ locals: {sanity} }) => {
    const {client, previewEnabled} = sanity
    const options = {stega: previewEnabled}
    const page = await client.fetch(pageQuery, {}, options)

    // console.debug("All page data: ", page)

    return {
        page
    }
}) satisfies PageServerLoad;