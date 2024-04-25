'use client'

import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'

const NavOptions = () => {
  const pathname = usePathname()
  const lastSegment = pathname.split('/').pop()
  return (
    <div>
      {lastSegment === 'chat' && (
        <div className='flex gap-2'>
          <Link href={'/calendar'}>
            <Button variant={'outline'}>Go to Calendar</Button>
          </Link>
          <LogoutLink>
            <Button variant={'outline'}>Logout</Button>
          </LogoutLink>
        </div>
      )}
      {lastSegment === 'calendar' && (
        <Link href={'/chat'}>
          <Button variant={'outline'}>Go to Chat</Button>
        </Link>
      )}
    </div>
  )
}

export default NavOptions
