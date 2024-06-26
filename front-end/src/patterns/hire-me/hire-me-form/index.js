'use client'

import Button from '@/components/button'
import TextFieldController from '@/components/textFieldController'
import { Alert, Paper } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { useFormState } from 'react-dom'
import { sendEmail } from '@/actions/sendEmail'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './hireMeForm.module.css'
import validateEmail from '@/validators/emailValidator'
import validateNotEmpty from '@/validators/notEmptyValidator'
import { useTranslations } from 'next-intl'
import Confetti from '@/components/confetti'

const getTranslatedErrorMessage = (t, error) => {
  if (error?.message) {
    return t(error.message)
  }

  return undefined
}

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

  const ref = useRef()
  const [isConfettiActive, setIsConfettiActive] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  })
  const t = useTranslations('Hire-me.Form')
  const errorTranslator = useTranslations('Errors')

  const onSubmit = (data) => {
    reset()
    setSubmitting(true)
    sendEmailAction(data)
  }

  useEffect(() => {
    setSubmitting(false)

    if (sendEmailState.success) {
      setIsConfettiActive(true)
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
        error={getTranslatedErrorMessage(errorTranslator, errors.name)}
        rules={{
          validate: { validateNotEmpty },
        }}
        autoComplete='name'
      />

      <TextFieldController
        name='email'
        control={control}
        error={getTranslatedErrorMessage(errorTranslator, errors.email)}
        type='email'
        required
        label='Email'
        rules={{
          validate: { validateEmail },
        }}
        autoComplete='email'
      />

      <TextFieldController
        name='message'
        control={control}
        required
        multiline
        error={getTranslatedErrorMessage(errorTranslator, errors.message)}
        rows={5}
        label={t('message')}
        rules={{
          validate: { validateNotEmpty },
        }}
        autoComplete='off'
      />

      <Button loading={submitting} type='submit' variant='contained'>
        {t('submit')}
      </Button>

      {isConfettiActive && (
        <div
          ref={ref}
          style={{
            maxHeight: '0',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-16px',
          }}
        >
          <Confetti setIsConfettiActive={setIsConfettiActive} />
        </div>
      )}
    </Paper>
  )
}
