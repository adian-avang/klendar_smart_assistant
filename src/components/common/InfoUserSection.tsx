'use client'

import { useKindeBrowserClient, LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'

const InfoUserSection = () => {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient()

  return (
    <div className='flex flex-col justify-center content-center'>
      {isLoading && (
        <div className='animate-spin rounded-full h-7 w-7 border-b-2 border-gray-900 mx-auto my-2'></div>
      )}
      {user?.picture && (
        <Image
          src={user?.picture}
          alt={'Profile picture'}
          width={50}
          height={50}
          className='rounded-full mx-auto my-2'
        />
      )}
      {user && !user.picture && (
        <div className='h-7 w-7 mx-auto my-2 rounded-full bg-zinc-800 text-xs flex justify-center items-center'>
          {user?.given_name?.[0]}
        </div>
      )}
      {user?.email && (
        <p className='text-center text-xs mb-3'>Logged in as {user?.email}</p>
      )}
      {isAuthenticated && (
        <div className='flex justify-center'>
          <LogoutLink
            className={`py-3 px-5 text-center hover:bg-slate-700 hover:text-white rounded-md w-[80%] transition inline-block`}
          >
            Log out
          </LogoutLink>
        </div>
      )}
    </div>
  )
}

export default InfoUserSection
