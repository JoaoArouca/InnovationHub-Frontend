import { z } from 'zod'

// export const RolesSchema = z.enum(roles)
export const CreateUserRequestSchema = z.object({
  name: z.string().min(3),
  password: z.string().min(6),
  email: z.string().email(),
  role: z.enum(['CUSTOMER', 'ADMIN', 'INTERNAL']).default('CUSTOMER'),
})
