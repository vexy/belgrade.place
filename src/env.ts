import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    SANITY_PROJECT_ID: {
        public: true,
    },
    SANITY_DATASET: {
        public: true
    },

    SANITY_STUDIO_URL: {},
    SANITY_VIEWER_TOKEN: {}
});