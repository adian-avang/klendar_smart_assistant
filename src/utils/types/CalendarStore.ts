import { DateSelectArg } from '@fullcalendar/core/index.js'

export type CalendarStore = {
  selectedDay: DateSelectArg | null
  setSelectedDay: (dayInfo: DateSelectArg) => void
}
