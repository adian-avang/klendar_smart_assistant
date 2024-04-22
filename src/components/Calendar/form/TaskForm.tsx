'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useCalendarStore } from '@/utils/store/calendar-store'
import { TaskFormSchema } from '@/utils/schemas/Task'
import { addTask } from '@/actions/taskActions'

const TaskForm = () => {
  const { selectedDay } = useCalendarStore()
  const form = useForm<z.infer<typeof TaskFormSchema>>({
    resolver: zodResolver(TaskFormSchema),
    defaultValues: {
      title: '',
      description: '',
      start: '',
      end: '',
    },
  })

  function dayFormatter(selectedTime: string, type: 'start' | 'end') {
    if (selectedDay == null) throw new Error('No hay una fecha seleccionada')
    const pickedDate = selectedDay[type]

    const [hours, minutes] = selectedTime.split(':').map(Number)

    pickedDate?.setHours(hours)
    pickedDate?.setMinutes(minutes)
    pickedDate?.setSeconds(0)
    type === 'end' && pickedDate?.setDate(pickedDate.getDate() - 1)

    console.log('despues de', pickedDate)

    return pickedDate
  }
  function onSubmit(values: z.infer<typeof TaskFormSchema>) {
    console.log(values)
    const calendarApi = selectedDay?.view.calendar
    calendarApi?.unselect() // clear date selection

    const newTask = {
      title: values.title,
      content: values.description || '',
      allDay: false,
      start: dayFormatter(values?.start, 'start') as Date,
      end: dayFormatter(values?.end, 'end') as Date,
    }

    console.log('Nueva tarea', newTask)

    addTask(newTask)
  }
  return (
    <div className='py-2 px-4'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titulo</FormLabel>
                <FormControl>
                  <Input
                    placeholder='nombre de tarea'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripcion</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='descripcion de la tarea'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='start'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start</FormLabel>
                    <FormControl>
                      <Input
                        className='flex justify-center'
                        type='time'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='end'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End</FormLabel>
                    <FormControl>
                      <Input
                        className='flex justify-center'
                        type='time'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            type='submit'
            className='w-full'
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default TaskForm
