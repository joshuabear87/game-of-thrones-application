import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Container, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Home from './pages/Home';
import Books from './pages/Books';
import Characters from './pages/Characters';
import Houses from './pages/Houses';
import Header from './components/Header';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
  }, []);

  // Save the preference to localStorage whenever darkMode changes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2', // Blue for light mode
      },
      secondary: {
        main: '#ff4081', // Pink for light mode
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
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
        <Header />
        <Container style={{ padding: '20px' }}>
          <IconButton onClick={toggleDarkMode} style={{ marginBottom: '20px' }}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
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
