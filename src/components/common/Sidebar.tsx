import ListContent from '../Calendar/sidebar/ListContent'
import MiniCalendar from '../Calendar/sidebar/MiniCalendar'
import InfoUserSection from './InfoUserSection'

const Sidebar = () => {
  return (
    <div className='flex flex-col h-full py-4 min-w-92 border border-gray-100 shadow-xl'>
      <div className='flex justify-center'>
        <MiniCalendar />
      </div>
      <div className='max-h-96 overflow-y-scroll scroll'>
        <ListContent />
      </div>
      <div className='grow flex flex-col justify-end'>
        <InfoUserSection />
      </div>
    </div>
  )
}

export default Sidebar
