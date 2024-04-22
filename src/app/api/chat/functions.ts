import { addTask } from '@/actions/taskActions'

export const functions = [
  {
    name: 'create_task_in_calendar',
    description: 'Create an task in Noswork Calendar',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
]

async function create_task_in_calendar() {
  const calendarUrl = 'http://localhost:3000/calendar'
  const task = await addTask({
    title: 'Test task for IA',
    content: 'This is a test event',
    start: new Date(),
    end: new Date(),
    allDay: true,
  })

  return {
    ...task,
    hnUrl: calendarUrl,
  }
}

export async function runFunction(name: string, args: any) {
  switch (name) {
    case 'create_task_in_calendar':
      return await create_task_in_calendar()
    default:
      return null
  }
}
