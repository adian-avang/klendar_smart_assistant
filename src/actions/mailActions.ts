'use server'

import { sendMail } from '@/lib/mail'

export async function sendMailToAll(guests: string[]) {
  await sendMail(guests)
}
