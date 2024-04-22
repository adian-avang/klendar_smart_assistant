import { z } from 'zod'

export const UserSchema = z.object({
  kindeAuthId: z.string(),
  email: z.string().email(),
  tasks: z.array(z.number()),
  createdEvents: z.array(z.number()),
  invitedEvents: z.array(z.number()),
})
