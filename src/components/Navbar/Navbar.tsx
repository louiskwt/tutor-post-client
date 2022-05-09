import { Box, Typography } from '@mui/material'
import './Navbar.css'

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} className="navbar">
        <Typography variant='h4' mt={2} fontWeight={800} component='div' >Tutor Post </Typography>
    </Box>
  )
}

export default Navbar