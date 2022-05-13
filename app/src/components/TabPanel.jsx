import { Box } from '@mui/material'

/**
 * @returns The content of the clicked tab
 * value that equals to the child's index
 */
export default function TabPanel ({ children, value, index }) {
  return (
    <Box
      sx={{ p: 3 }}
      role='tabpanel'
      hidden={value !== index}
    >
      {children}
    </Box>
  )
}
