'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { DateSelectArg, EventClickArg } from '@fullcalendar/core/index.js'
import { useEffect, useState } from 'react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import CalendarForm from './form/CalendarForm'
import { useCalendarStore } from '@/utils/store/calendar-store'
import { getEvents, getInvitations } from '@/actions/eventActions'
import { deleteTask, getTasks } from '@/actions/taskActions'

const CalendarPage = () => {
  const [events, setEvents] = useState([{}])
  const [openForm, setOpenForm] = useState(false)
  const { setSelectedDay } = useCalendarStore()

  useEffect(() => {
    const list = async () => {
      const tasks = await getTasks()
      const events = await getEvents()
      const res = await getInvitations()
      const invitations = res?.invitedEvents || []
      setEvents([...tasks, ...events, ...invitations])
    }
    list()
  }, [])
  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove()
      deleteTask(clickInfo.event.id)
    }
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelectedDay(selectInfo)
    setOpenForm(true)
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        //Falta guardar el estado del initialView
        initialView={'dayGridMonth'}
        // viewDidMount={}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
        firstDay={1}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        events={events}
        // eventAdd={}
        // eventChange={}
        // eventRemove={}
        height={'100%'}
      />
      <CalendarForm
        open={openForm}
        setOpen={setOpenForm}
      />
    </>
  )
}

export default CalendarPage
