import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']).default('development'),
})

export const env = envSchema.parse(import.meta.env)
