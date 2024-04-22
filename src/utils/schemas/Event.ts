import { z } from 'zod'

export const EventSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  title: z.string().max(255),
  content: z.string(),
  createdByKindeAuthId: z.string(),
  invitedUsers: z.array(z.number()),
})

export const EventFormSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().optional(),
  start: z.string(),
  end: z.string(),
})
