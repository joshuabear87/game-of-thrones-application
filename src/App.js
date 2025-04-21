import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import Home from './pages/Home';
import Books from './pages/Books';
import Characters from './pages/Characters';
import Houses from './pages/Houses';
import Header from './components/Header'; // Import the updated Header component

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#1C1C1C' : '#F5EBD4',
      },
      text: {
        primary: darkMode ? '#C0C0C0' : '#7C5A37',
      },
    },
    typography: {
      fontFamily: 'Cinzel, serif',
      h3: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      body1: {
        fontSize: '1rem',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Pass darkMode and toggleDarkMode to Header */}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Container maxWidth="lg" sx={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/houses" element={<Houses />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
