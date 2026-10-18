import {
    SANITY_VIEWER_TOKEN
} from '$app/env/private'
import { client } from '#lib/sanity.ts'

// Sanity server client
export const serverClient = client.withConfig({
  token: SANITY_VIEWER_TOKEN
})