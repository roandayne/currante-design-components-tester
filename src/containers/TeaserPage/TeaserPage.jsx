import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Intro from '../../components/Intro/Intro'
import NavBar from '../../components/NavBar/NavBar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Reasons from '../../components/Reasons/Reasons'
import Welcome from '../../components/Welcome/Welcome'


function TeaserPage({headerFont, nonHeaderFont, handleHeaderFontChange, handleNonHeaderFontChange}) {
  const [isEditorShown, setIsEditorShown] = useState(false)
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [accent, setAccent] = useState('');
  const [lighterBg, setLighterBg] = useState('');
  const [darkerBg, setDarkerBg] = useState('');
  

  const handleShowEditor = () => {
    setIsEditorShown(!isEditorShown)
  }

  return (
    <>
      {isEditorShown ? (
        <Box padding="20px">
          <TextField
            label="Primary"
            value={primary}
            onChange={(e) => setPrimary(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Secondary"
            value={secondary}
            onChange={(e) => setSecondary(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Accent"
            value={accent}
            onChange={(e) => setAccent(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Lighter Background"
            value={lighterBg}
            onChange={(e) => setLighterBg(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Darker Background"
            value={darkerBg}
            onChange={(e) => setDarkerBg(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Header Font"
            value={headerFont}
            onChange={(e) => handleHeaderFontChange(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Non-Header Font"
            value={nonHeaderFont}
            onChange={(e) => handleNonHeaderFontChange(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Box>
      ) : <></>}

      <NavBar showEditor={handleShowEditor} isEditorShown={isEditorShown} primary={primary} /> 

      <Box padding="40px 0 0 0">
        <Welcome accent={accent} headerFont={headerFont} nonHeaderFont={nonHeaderFont} />
        <Newsletter accent={accent} lighterBg={lighterBg} headerFont={headerFont} nonHeaderFont={nonHeaderFont} />
        <Reasons darkerBg={darkerBg} headerFont={headerFont} nonHeaderFont={nonHeaderFont} />
        <Intro headerFont={headerFont} nonHeaderFont={nonHeaderFont} />
        <Newsletter accent={accent} lighterBg={lighterBg} headerFont={headerFont} nonHeaderFont={nonHeaderFont} />
      </Box>
      
      <Footer primary={primary} />
    </>
  )
}

export default TeaserPage