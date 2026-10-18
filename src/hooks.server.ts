import {redirect} from '@sveltejs/kit'
import {sequence} from '@sveltejs/kit/hooks'
import {handlePreviewMode} from '@sanity/sveltekit'
import {serverClient} from '#lib/sanity.server.ts'

export const handle = sequence(
  handlePreviewMode({
    client: serverClient,
    preview: {redirect}
  })
)