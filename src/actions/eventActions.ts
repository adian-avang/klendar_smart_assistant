'use server'

import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { getFromServer_kindeId } from '../utils/Auth/auth'

export async function getEvents() {
  const kindeId = await getFromServer_kindeId()

  const events = await prisma.event.findMany({
    where: {
      createdByKindeAuthId: kindeId,
    },
    cacheStrategy: { ttl: 60 },
  })
  return events
}
export async function addEvent({
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

  const event = await prisma.event.create({
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
  return event
}

export async function updateEvent({
  id,
  title,
  content,
  start,
  end,
  allDay,
}: {
  id: number
  title: string
  content: string
  start: Date
  end: Date
  allDay: boolean
}) {
  const kindeId = await getFromServer_kindeId()

  const newEvent = await prisma.event.update({
    where: {
      id,
      createdByKindeAuthId: kindeId,
    },
    data: {
      title,
      content,
      start,
      end,
      allDay,
    },
  })
  revalidatePath('/calendar')
  return newEvent
}

export async function deleteEvent(id: number) {
  const kindeId = await getFromServer_kindeId()

  await prisma.event.delete({
    where: {
      id,
      createdByKindeAuthId: kindeId,
    },
  })
}

async function addGuestsToEvent(eventId: number, guestid: number[]) {
  const kindeId = await getFromServer_kindeId()

  await prisma.event.update({
    where: {
      id: eventId,
      createdByKindeAuthId: kindeId,
    },
    data: {
      invitedUsers: {
        connect: guestid.map((id: number) => ({ id })),
      },
    },
  })
}
export async function createAndInviteEvent({
  title,
  content,
  start,
  end,
  allDay,
  emails,
}: {
  title: string
  content: string
  start: Date
  end: Date
  allDay: boolean
  emails: string[]
}) {
  const kindeId = await getFromServer_kindeId()
  const { id } = await addEvent({ title, content, start, end, allDay })

  const guestId = await prisma.user.findMany({
    where: {
      email: {
        in: emails,
      },
    },
  })
  await addGuestsToEvent(
    id,
    guestId.map((user) => user.id)
  )
  return id
}
