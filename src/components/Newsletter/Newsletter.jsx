import { Box, Typography, Button, TextField } from '@mui/material'
import React from 'react'

function Newsletter({accent, lighterBg, headerFont, nonHeaderFont}) {
  return (
    <Box display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="center" padding="20px" sx={{backgroundColor: lighterBg}}>
      <Typography variant='h4' sx={{fontSize: "20px", fontWeight: "bold", fontFamily: headerFont}} textAlign={"center"} margin="20px">Stay Connected with <br/>Our Exclusive Newsletter!</Typography>
      <Typography variant='p' sx={{fontSize: "12px", fontFamily: nonHeaderFont}} textAlign={"center"} margin="20px 0 40px 0">Stay informed and engaged with exclusive content and benefits by subscribing to our newsletter at Currante.</Typography>
      <Box display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="center" width={"90%"}>
        <TextField
          label="Enter text"
          variant="outlined"
          size="small"
          fullWidth
          padding="10px"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: '100%', margin: "10px", backgroundColor: accent }}
        >
          <Typography variant='p' sx={{fontFamily: nonHeaderFont}}>Subscribe</Typography>
        </Button>
        <Typography padding="10px" variant='p' sx={{fontSize: "10px", fontFamily: nonHeaderFont}} textAlign="center">By subscribing to the newsletter, I have read this form and understand its content and voluntarily give my consent for the collection, use, processing, storage and retention of my personal data or information to Sence1 for the purpose(s) described in the Privacy Policy</Typography>
      </Box>
      </Box>
  )
}

export default Newsletter