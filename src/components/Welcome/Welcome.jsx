import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Welcome({accent, headerFont, nonHeaderFont}) {
  return (
    <Box display={"flex"} padding="20px">
      <Box padding={"0 10px"} display="flex" flexDirection={"column"} justifyContent="flex-end" flexGrow={1} alignSelf="flex-end">
        <Typography variant="p" style={{fontSize: "12px", fontFamily: headerFont}} gutterBottom>
          Your Ultimate Workforce Solution
        </Typography>

        <Typography variant="h5" style={{fontSize: "26px", margin: "0", fontFamily: headerFont}} gutterBottom>
          Hire at Currante
        </Typography>
        <Button sx={{backgroundColor: accent, fontFamily: nonHeaderFont}} variant="contained" width="auto">Get Started</Button>
      </Box>
      <Box width={160} height={200}>
        <Card>
          <CardMedia
            component="img"
            alt="Image Alt Text"
            height="200"
            width="160"
            image={"https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          />
        </Card>
      </Box>
    </Box>
  )
}

export default Welcome