import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

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
