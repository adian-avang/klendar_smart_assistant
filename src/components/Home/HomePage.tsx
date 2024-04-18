import AbsolutePicList from './AbsolutePicList'
import Auth from './Auth'
import LanguageSwitch from './LanguageSwitch'

const HomePage = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-900 via-blue-600 to-blue-900 h-dvh w-screen relative overflow-hidden'>
      <div
        className={`w-full absolute top-[20%] z-10 md:top-0 md:w-1/3 md:h-1/2 flex md:items-center`}
      >
        <Auth />
      </div>
      <AbsolutePicList />
      <LanguageSwitch locale={'es'} />
    </div>
  )
}

export default HomePage
