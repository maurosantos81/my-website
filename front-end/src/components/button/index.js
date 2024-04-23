import { LoadingButton } from '@mui/lab'

export default function Button({ children, ...props }) {
  return <LoadingButton {...props}>{children}</LoadingButton>
}
