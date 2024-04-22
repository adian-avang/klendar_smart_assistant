import { getAllUsers } from '@/actions/userActions'
import CalendarPage from '@/components/Calendar/CalendarPage'
import { sendMail } from '@/lib/mail'

const page = async () => {
  const usersEmails = await getAllUsers()
  console.log(usersEmails)
  sendMail([usersEmails[0].email])
  return <CalendarPage />
}

export default page
