'use server'

import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { getFromServer_kindeId } from '../utils/Auth/auth'

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

  const task = await prisma.task.findMany({
    where: {
      id: parseInt(id),
      createdByKindeAuthId: kindeId,
    },
  })
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
  title,
  content,
}: {
  id: number
  title: string
  content: string
}) {
  const kindeId = await getFromServer_kindeId()

  await prisma.task.update({
    where: {
      id,
      createdByKindeAuthId: kindeId,
    },
    data: {
      title,
      content,
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
