'use client'

import styled from '@emotion/styled'
import { FormControl, InputBase, InputLabel } from '@mui/material'
import styles from './textfield.module.css'

const BootstrapTextField = styled(InputBase)(({}) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#F3F6F9',
    border: '1px solid',
    borderColor: '#E0E3E7',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
  },
}))

export default function TextField({
  label,
  id,
  name,
  error,
  multiline,
  ...props
}) {
  return (
    <FormControl variant='standard'>
      <InputLabel
        className={styles.label}
        sx={{
          color: 'var(--white-bg-p-color)',
          fontWeight: 'bold',
          marginTop: '4px',
        }}
        shrink
        htmlFor={id || name}
      >
        {label}
      </InputLabel>
      <BootstrapTextField
        className={multiline ? styles['text-area'] : styles['text-field']}
        id={id || name}
        multiline={multiline}
        {...props}
      />{' '}
      <p className={styles.error}>{error?.message || error}</p>
    </FormControl>
  )
}
