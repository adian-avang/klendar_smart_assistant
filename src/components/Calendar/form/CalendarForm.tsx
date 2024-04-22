'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Dispatch, SetStateAction } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import EventForm from './EventForm'
import TaskForm from './TaskForm'

interface CalendarFormProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const CalendarForm = (props: CalendarFormProps) => {
  const { open, setOpen } = props
  return (
    <Dialog
      open={open}
      onOpenChange={() => setOpen(false)}
      modal
    >
      <DialogContent className='sm:max-w-[425px] bg-slate-100'>
        <div className='grid gap-4 p-4'>
          <Accordion
            type='single'
            collapsible
            className='w-full flex flex-col gap-2'
          >
            <AccordionItem value='item-1'>
              <div className='bg-slate-900 w-full text-white px-4 border rounded-xl'>
                <div className='w-full'>
                  <AccordionTrigger type='button'>
                    <p className='no-underline'>Evento</p>
                  </AccordionTrigger>
                </div>
              </div>
              <AccordionContent>
                <EventForm />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <div className='bg-slate-900 w-full text-white px-4 border rounded-xl'>
                <div className='w-full'>
                  <AccordionTrigger type='button'>
                    <p className='no-underline'>Tarea</p>
                  </AccordionTrigger>
                </div>
              </div>
              <AccordionContent>
                <TaskForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CalendarForm
