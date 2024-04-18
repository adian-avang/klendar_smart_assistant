import { Button } from '@/components/ui/button'
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

const Auth = () => {
  return (
    <>
      <div className='flex flex-col w-full'>
        <h1 className='text-7xl text-nowrap text-white font-extrabold text-center'>
          K-lendar
        </h1>
        <p className='text-center text-xl text-gray-800'>
          Calendario para modulo de Noswork
        </p>
        <br />

        <div className='flex justify-center gap-x-2'>
          <LoginLink>
            <Button className='py-3 px-5 rounded-md bg-slate-900 text-white'>
              Login
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button
              className='py-3 px-5 rounded-md'
              variant={'outline'}
            >
              Register
            </Button>
          </RegisterLink>
        </div>
      </div>
    </>
  )
}

export default Auth
