'use client'

import WidthLimitedSection from '@/components/widthLimitedSection'
import styles from './hire.module.css'
import { Alert, Paper } from '@mui/material'
import Button from '@/components/button'
import validateNotEmpty from '@/validators/notEmptyValidator'
import { useForm } from 'react-hook-form'
import TextFieldController from '@/components/textFieldController'
import validateEmail from '@/validators/emailValidator'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'

const FORM_SUBMITED_MESSAGE =
  "Thank you for reaching out! I'll get back to you as soon as possible"

export default function HireMeSection() {
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

  const onSubmit = (data) => {
    reset()
    console.log(data)
    setSubmited(true)
  }

  return (
    <WidthLimitedSection id='hire-me' className={styles.section}>
      <h2>Hire Me!</h2>

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

        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </Paper>
    </WidthLimitedSection>
  )
}
