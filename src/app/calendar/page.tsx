import { getAllUsers } from '@/actions/userActions'
import CalendarPage from '@/components/Calendar/CalendarPage'

const page = async () => {
  const usersEmails = await getAllUsers()
  console.log(usersEmails)
  return <CalendarPage />
}

export default page
