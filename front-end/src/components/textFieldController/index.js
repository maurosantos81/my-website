import { Controller } from 'react-hook-form'
import TextField from '../textField'
import { forwardRef } from 'react'

const TextFieldController = forwardRef(
  ({ name, control, rules, controllerProps, ...props }, ref) => {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        {...controllerProps}
        render={({ field }) => <TextField {...field} {...props} ref={ref} />}
      />
    )
  },
)

TextFieldController.displayName = 'TextFieldController'

export default TextFieldController
