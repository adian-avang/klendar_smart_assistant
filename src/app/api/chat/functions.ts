// import { addEvent } from '@/src/actions/eventActions'

export const functions = [
  {
    name: 'create_event_in_calendar',
    description: 'Create an event in Noswork Calendar',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
]

async function create_event_in_calendar() {
  const calendarUrl = 'http://localhost:3000/calendar'
  // const event = addEvent({
  //   title: 'Test Event',
  //   content: 'This is a test event',
  //   start: new Date(),
  //   end: new Date(),
  //   allDay: true,
  // })

  return {
    // ...event,
    hnUrl: calendarUrl,
  }
}

export async function runFunction(name: string, args: any) {
  switch (name) {
    case 'create_event_in_calendar':
      return await create_event_in_calendar()
    default:
      return null
  }
}
