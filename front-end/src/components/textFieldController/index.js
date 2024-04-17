import { Controller } from 'react-hook-form'
import TextField from '../textField'

export default function TextFieldController({
  name,
  control,
  rules,
  controllerProps,
  ...props
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      {...controllerProps}
      render={({ field }) => <TextField {...field} {...props} />}
    />
  )
}
