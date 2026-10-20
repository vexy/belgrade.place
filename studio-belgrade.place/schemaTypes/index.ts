import { streetSchema } from "./street"
import { categorySchema } from "./category"
import { municipalitySchema } from "./municipalities"

// Register all post types for this project
export const schemaTypes = [
    categorySchema,
    municipalitySchema,
    streetSchema
]
