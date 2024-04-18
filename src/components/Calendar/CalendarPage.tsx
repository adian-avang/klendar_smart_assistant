'use client'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { Button } from '../ui/button'

const CalendarPage = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <LogoutLink>
        <Button>Logout</Button>
      </LogoutLink>
    </div>
  )
}

export default CalendarPage
