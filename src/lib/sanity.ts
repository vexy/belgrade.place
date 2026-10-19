import {createClient} from '@sanity/sveltekit'
import {
  SANITY_DATASET,
  SANITY_PROJECT_ID,
  SANITY_STUDIO_URL,
} from '$app/env/public'

// Sanity browser client
export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2026-07-01',
  useCdn: true,
  stega: {
    enabled: true,
    studioUrl: SANITY_STUDIO_URL
  }
})