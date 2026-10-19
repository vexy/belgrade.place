import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    // Public vars:
    SANITY_PROJECT_ID: {
        public: true,
    },
    SANITY_DATASET: {
        public: true
    },
    SANITY_STUDIO_URL: {
        public: true
    },

    // Private
    SANITY_VIEWER_TOKEN: {}
});