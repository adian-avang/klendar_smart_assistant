import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import { ReactNode } from 'react'

const CalendarLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className='h-screen flex flex-row w-full '>
      <aside className='min-w-72 md:block'>
        <Sidebar />
      </aside>
      <main className='grow'>
        <div className='h-full flex flex-col'>
          <nav>
            <Navbar />
          </nav>
          <div className='h-full p-5'>{children}</div>
        </div>
      </main>
    </div>
  )
}

export default CalendarLayout
