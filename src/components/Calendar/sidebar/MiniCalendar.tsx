'use client'

import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

const MiniCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        weekStartsOn={1}
        onMonthChange={(month) => {
          alert(new Date(month.getTime()))
        }}
      />
    </>
  )
}

export default MiniCalendar
