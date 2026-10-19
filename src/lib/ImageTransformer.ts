import { client } from '#lib/sanity.ts'
import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder(client)
const defaultSize = 150 //px

export function imageURLFor(source) {
  return builder.image(source).size(defaultSize, defaultSize)
}