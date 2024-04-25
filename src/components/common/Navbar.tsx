import NavOptions from './NavOptions'
import TitleBrand from './TitleBrand'

const Navbar = () => {
  return (
    <div className='bg-slate-600 flex justify-between px-5 py-2'>
      <TitleBrand />
      <NavOptions />
    </div>
  )
}

export default Navbar
