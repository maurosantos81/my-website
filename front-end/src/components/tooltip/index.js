import styled from '@emotion/styled'
import { Tooltip as MUITooltip, Paper, tooltipClasses } from '@mui/material'

const CustomTooltip = styled(({ className, ...props }) => (
  <MUITooltip
    components={Paper}
    elevation={2}
    placement='bottom-end'
    slotProps={{
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -8],
            },
          },
        ],
      },
    }}
    {...props}
    arrow
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'black',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'black',
    padding: '0.8rem',
  },

  [`& .${tooltipClasses.tooltip} p`]: {
    fontSize: 'var(--p-small-font-size)',
  },
}))

export default function Tooltip({ children, ...props }) {
  return <CustomTooltip {...props}>{children}</CustomTooltip>
}
