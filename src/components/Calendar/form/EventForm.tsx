'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import GuestList from './GuestList'
import { useEffect, useState } from 'react'
import { EventFormSchema } from '@/utils/schemas/Event'
import { useCalendarStore } from '@/utils/store/calendar-store'
import { getAllUsers } from '@/actions/userActions'
import { createAndInviteEvent } from '@/actions/eventActions'
import { sendMailToAll } from '@/actions/mailActions'

const EventForm = () => {
  const [suggestion, setSuggestion] = useState<{ email: string }[]>([])
  const [guests, setGuests] = useState<string[]>([])
  const { selectedDay } = useCalendarStore()

  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: {
      title: '',
      description: '',
      start: '',
      end: '',
    },
  })

  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers()
      setSuggestion(users)
    }
    getUsers()
  }, [])

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
  function onSubmit(values: z.infer<typeof EventFormSchema>) {
    console.log(values)
    console.log(guests)

    const calendarApi = selectedDay?.view.calendar
    calendarApi?.unselect() // clear date selection

    const newEvent = {
      title: values.title,
      content: values.description || '',
      allDay: false,
      start: dayFormatter(values?.start, 'start') as Date,
      end: dayFormatter(values?.end, 'end') as Date,
      emails: guests,
    }
    console.log('Nuevo evento', newEvent)

    createAndInviteEvent(newEvent)
    sendMailToAll(guests)
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
                    placeholder='nombre del evento'
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
                    placeholder='descripcion del evento'
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
          <Accordion
            type='single'
            className='w-full '
            collapsible
          >
            <AccordionItem value='guests'>
              <AccordionTrigger>Invitados</AccordionTrigger>
              <AccordionContent>
                <GuestList
                  guests={suggestion}
                  setGuests={setGuests}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <FormMessage />
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

export default EventForm
