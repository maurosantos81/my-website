import { Button as MUIButton } from '@mui/material'
import styles from './button.module.css'

export default function Button({...props}) {
    return (<MUIButton {...props}></MUIButton>)
}