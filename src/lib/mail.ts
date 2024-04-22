import nodemailer from 'nodemailer'

export async function sendMail(to: string[]) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  })
  try {
    const sendMail = await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: to,
      subject: 'K-lendar event',
      html: `
                <h1>¡Invitación a un evento!</h1>
                <p>Estimado/a <strong>Receptor</strong>,</p>
                <p>Le invitamos a un evento inolvidable. No dudes en asistir, ya que nos encantaría verte allí.</p>
                <p>No te pierdas, ya que este es un evento muy especial.</p>
                <p>¡Gracias por tu participación!</p>
            `,
    })
  } catch (error) {}
}
