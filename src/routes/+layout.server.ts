import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: {sanity}}) => {
    const { previewEnabled } = sanity

    return {
        previewEnabled
    };
}) satisfies LayoutServerLoad;