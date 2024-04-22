import { create } from 'zustand'
import { CalendarStore } from '../types/CalendarStore'

export const useCalendarStore = create<CalendarStore>()((set) => ({
  selectedDay: null,
  setSelectedDay: (dayInfo) =>
    set((state) => ({ ...state, selectedDay: dayInfo })),
}))
