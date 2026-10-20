import type { LayoutServerLoad } from './$types';
import { allCategories, allMunicipalities } from '#lib/queries.ts';

export const load = (async ({ locals: {sanity}}) => {
    const { client, previewEnabled } = sanity

    // fetch all content categories directly
    const categories = await client.fetch(allCategories)
    const municipalities = await client.fetch(allMunicipalities)

    return {
        previewEnabled,
        categories,
        municipalities
    };
}) satisfies LayoutServerLoad;