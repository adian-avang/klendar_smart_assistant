'use server'

import prisma from '@/lib/db'

export async function deleteUser(email: string) {
  await prisma.user.delete({
    where: {
      email,
    },
  })
}

export async function getUserFromServer(kindeId: string) {
  const user = await prisma.user.findUnique({
    where: {
      kindeId,
    },
  })
  return user
}

export async function getAllUsers() {
  const users = await prisma.user.findMany({
    select: {
      email: true,
    },
  })
  return users
}
