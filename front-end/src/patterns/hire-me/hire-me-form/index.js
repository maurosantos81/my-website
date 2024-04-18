'use client'

import Button from '@/components/button'
import TextFieldController from '@/components/textFieldController'
import { Alert, Paper } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { useFormState } from 'react-dom'
import { sendEmail } from '@/actions/sendEmail'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './hireMeForm.module.css'
import validateEmail from '@/validators/emailValidator'
import validateNotEmpty from '@/validators/notEmptyValidator'

const FORM_SUBMITED_MESSAGE =
  "Thank you for reaching out! I'll get back to you as soon as possible"

const FORM_ERROR_MESSAGE =
  'An error ocurred while submitting the contact form. Please try again later.'

export default function HireMeForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const [submited, setSubmited] = useState(false)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  })
  const onSubmit = (data) => {
    reset()
    setError(false)
    setSubmited(false)
    setSubmitting(true)

    sendEmailAction(data)
  }

  useEffect(() => {
    setSubmitting(false)
    if (sendEmailState.success) {
      setSubmited(true)
    }

    if (sendEmailState.error) {
      setError(true)
    }
  }, [sendEmailState])

  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: '12px' }}
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      className={styles['contact-form']}
    >
      {submited && (
        <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
          {FORM_SUBMITED_MESSAGE}
        </Alert>
      )}

      {error && <Alert severity='error'>{FORM_ERROR_MESSAGE}</Alert>}

      <TextFieldController
        name='name'
        control={control}
        required
        label='Name'
        error={errors.name}
        rules={{
          validate: { validateNotEmpty },
        }}
      />

      <TextFieldController
        name='email'
        control={control}
        error={errors.email}
        type='email'
        required
        label='Email'
        rules={{
          validate: { validateEmail },
        }}
      />

      <TextFieldController
        name='message'
        control={control}
        required
        multiline
        error={errors.message}
        rows={5}
        label='Message'
        rules={{
          validate: { validateNotEmpty },
        }}
      />

      <Button loading={submitting} type='submit' variant='contained'>
        Submit
      </Button>
    </Paper>
  )
}
