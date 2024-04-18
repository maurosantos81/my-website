'use server'

import { Resend } from 'resend'
import { HireMeEmail } from '@/emails/hireMeEmail'
import { render } from '@react-email/render'

const TO_EMAIL = process.env.TO_EMAIL
const FROM_EMAIL = 'no-reply@maurosantos.xyz'
const RESEND_API_KEY = process.env.RESEND_API_KEY

export const sendEmail = async (prevState, formData) => {
  const name = formData.name
  const email = formData.email
  const message = formData.message
  try {
    const resend = new Resend(RESEND_API_KEY)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `Mauro Santos - You received a message from ${name}`,
      html: render(HireMeEmail({ name, email, message })),
    })

    return {
      success: true,
    }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}
