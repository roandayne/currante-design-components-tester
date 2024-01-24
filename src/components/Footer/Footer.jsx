import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Footer({primary}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, backgroundColor: primary }}>
        <Toolbar>
          <Typography>FOOTER</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer