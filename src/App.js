import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Container, Alert, Collapse } from '@mui/material';
import { WarningAmberRounded } from '@mui/icons-material';
import Home from './pages/Home';
import Books from './pages/Books';
import Characters from './pages/Characters';
import Houses from './pages/Houses';
import Header from './components/Header';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Pass darkMode and toggleDarkMode as props to the Header */}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Container maxWidth="lg" sx={{ padding: '20px' }}>
          {/* 🛡️ Alert Message */}
          <Collapse in={showAlert}>
            <Alert
              severity="warning"
              icon={<WarningAmberRounded fontSize="inherit" />}
              onClose={() => setShowAlert(false)}
              sx={{
                backgroundColor: darkMode ? '#3E3E3E' : '#FDF4DC',
                color: darkMode ? '#D0D0D0' : '#6B4F30',
                border: '1px solid',
                borderColor: darkMode ? '#555' : '#D1B97F',
                mb: 3,
                fontWeight: 500,
              }}
            >
              The API content may not load if you are using Microsoft Edge.
            </Alert>
          </Collapse>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/houses" element={<Houses />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
