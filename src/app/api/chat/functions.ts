import { addTask } from '@/actions/taskActions'

export const functions = [
  {
    name: 'create_task_in_calendar',
    description: `Create an task in Calendar. Its important to know that the current year is ${new Date().getFullYear()}, month is ${
      new Date().getMonth() + 1
    } and day is ${new Date().getDate()}.`,
    parameters: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          description: 'The title of the task',
        },
        content: {
          type: 'string',
          description: 'The description of the task',
        },
        start: {
          type: 'string',
          description: 'The start date of the task in ISO-8601 format',
        },
        end: {
          type: 'string',
          description: 'The end date of the task in ISO-8601 format',
        },
        allDay: {
          type: 'boolean',
          description: 'Whether the task is all day or not',
        },
      },
      required: ['title', 'content', 'start', 'end'],
    },
  },
]

async function create_task_in_calendar(
  title: string,
  content: string,
  start: string,
  end: string,
  allDay?: boolean
) {
  const calendarUrl = 'http://localhost:3000/calendar'
  console.log(
    `title: ${title}, content: ${content}, start: ${new Date(
      start
    ).getDate()}, end: ${new Date(end).getHours()}, allDay: ${allDay}`
  )
  const task = await addTask({
    title,
    content,
    start: new Date(start),
    end: new Date(end),
    allDay: allDay || false,
  })

  return {
    ...{
      title: task.title,
      content: task.content,
      start: task.start.toISOString(),
      end: task.end.toISOString(),
      allDay: task.allDay,
    },
    hnUrl: calendarUrl,
  }
}

export async function runFunction(name: string, args: any) {
  switch (name) {
    case 'create_task_in_calendar':
      return await create_task_in_calendar(
        args['title'],
        args['content'],
        args['start'],
        args['end'],
        args['allDay']
      )
    default:
      return null
  }
}
