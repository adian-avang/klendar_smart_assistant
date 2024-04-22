import CalendarPage from '@/components/Calendar/CalendarPage'
import { askToServer_isAuthenticated, isFirstTime } from '@/utils/Auth/auth'
import { redirect } from 'next/navigation'

const page = async () => {
  const isAuth = await askToServer_isAuthenticated()
  isAuth ? isFirstTime() : redirect('/api/auth/login')

  return <CalendarPage />
}

export default page
