'use server'

import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { getFromServer_kindeId } from '../utils/Auth/auth'
import { z } from 'zod'
import { TaskFormSchema } from '@/utils/schemas/Task'

export async function getTasks() {
  const kindeId = await getFromServer_kindeId()

  const tasks = await prisma.task.findMany({
    where: {
      createdByKindeAuthId: kindeId,
    },
  })
  return tasks
}

export async function getTask (id: string) {
  const kindeId = await getFromServer_kindeId()

  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(id),
      createdByKindeAuthId: kindeId,
    },
  })
  console.log('tuve aqui')
  return task
}
export async function addTask({
  title,
  content,
  start,
  end,
  allDay,
}: {
  title: string
  content: string
  start: Date
  end: Date
  allDay: boolean
}) {
  const kindeId = await getFromServer_kindeId()

  const task = await prisma.task.create({
    data: {
      title,
      content,
      start,
      end,
      allDay,
      createdBy: {
        connect: {
          kindeId,
        },
      },
    },
  })
  revalidatePath('/calendar')
  return task
}

export async function updateTask({
  id,
  task
}: {
  id: string;
  task: z.infer<typeof TaskFormSchema>;
}) {
  const kindeId = await getFromServer_kindeId()
  await prisma.task.update({
    where: {
      id:parseInt(id),
      createdByKindeAuthId: kindeId,
    },
    data: {
      title: task.title,
      content: task.description,
      start: new Date(task.start),
      end: new Date(task.end),
    },
  })
  revalidatePath('/calendar')
}

export async function deleteTask(id: string) {
  const kindeId = await getFromServer_kindeId()

  await prisma.task.delete({
    where: {
      id: parseInt(id),
      createdByKindeAuthId: kindeId,
    },
  })
}
