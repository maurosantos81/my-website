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
import { useTranslations } from 'next-intl'

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

  const [submitting, setSubmitting] = useState(false)
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  })
  const t = useTranslations('Hire-me.Form')

  const onSubmit = (data) => {
    reset()
    setSubmitting(true)
    sendEmailAction(data)
  }

  useEffect(() => {
    setSubmitting(false)
  }, [sendEmailState])

  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: '12px' }}
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      className={styles['contact-form']}
    >
      {sendEmailState.success && (
        <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
          {t('submit-message')}
        </Alert>
      )}

      {sendEmailState.error && (
        <Alert severity='error'>{t('error-message')}</Alert>
      )}

      <TextFieldController
        name='name'
        control={control}
        required
        label={t('name')}
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
        label={t('message')}
        rules={{
          validate: { validateNotEmpty },
        }}
      />

      <Button loading={submitting} type='submit' variant='contained'>
        {t('submit')}
      </Button>
    </Paper>
  )
}
