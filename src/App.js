import './App.css';
import TeaserPage from './containers/TeaserPage/TeaserPage';
import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader'

function App() {
  const [headerFont, setHeaderFont] = useState('');
  const [nonHeaderFont, setNonHeaderFont] = useState('');

  useEffect(() => {
    console.log([headerFont.replace(/\s+/g, '+'), nonHeaderFont.replace(/\s+/g, '+')])
    WebFont.load({
      google: {
        // families: [headerFont.replace(/\s+/g, '+'), nonHeaderFont.replace(/\s+/g, '+')],
        families: [headerFont.replace(/\s+/g, '+'), nonHeaderFont.replace(/\s+/g, '+')],
      },
    });
  }, [headerFont, nonHeaderFont]);

  const handleHeaderFontChange = (value) => {
    setHeaderFont(value)
  }

  const handleNonHeaderFontChange = (value) => {
    setNonHeaderFont(value)
  }

  return (
    <>
      <TeaserPage headerFont={headerFont} nonHeaderFont={nonHeaderFont} handleHeaderFontChange={handleHeaderFontChange}  handleNonHeaderFontChange={handleNonHeaderFontChange} />
    </>
  );
}

export default App;
