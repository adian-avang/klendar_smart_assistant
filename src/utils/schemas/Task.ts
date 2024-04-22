import { z } from 'zod'

export const TaskSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  title: z.string().max(255),
  content: z.string(),
  done: z.boolean(),
  createdByKindeAuthId: z.string(),
})

export const TaskFormSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().optional(),
  start: z.string(),
  end: z.string(),
})
