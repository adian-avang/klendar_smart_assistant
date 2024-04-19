import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='bg-slate-500 flex justify-end p-2'>
        <LogoutLink>
          <Button variant={'outline'}>Logout</Button>
        </LogoutLink>
      </div>
      {children}
    </div>
  )
}

export default layout
