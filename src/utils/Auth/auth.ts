import prisma from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextResponse } from 'next/server'

export async function isFirstTime() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || user == null || !user.id) {
    NextResponse.redirect(`${process.env.KINDE_POST_LOGOUT_REDIRECT_URL}`)
    throw new Error('something went wrong with authentication' + user)
  }

  let dbUser = await prisma.user.findUnique({
    where: { kindeId: user.id },
  })

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        kindeId: user.id,
        firstName: user.given_name ?? '',
        lastName: user.family_name ?? '',
        email: user.email ?? '', // Using nullish coalescing operator to provide a default empty string value
      },
    })
  }
}
export async function askToServer_amOwnerOf(ownerId: string) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return user?.id === ownerId ? true : false
}

export async function askToServer_isAuthenticated() {
  const { isAuthenticated } = getKindeServerSession()
  const isLoggedIn = await isAuthenticated()
  return isLoggedIn
}

export async function askToServer_hasPermission(permission: string) {
  const { getPermission } = getKindeServerSession()
  const requiredPermission = await getPermission(permission)

  return requiredPermission?.isGranted ? true : false
}

export async function askToServer_hasAllPermissions(userPermissions: string[]) {
  const { getPermissions } = getKindeServerSession()
  const kindePermissions = await getPermissions()

  return userPermissions.every((p) => kindePermissions?.permissions.includes(p))
}

export async function getFromServer_kindeId() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return user?.id
}
