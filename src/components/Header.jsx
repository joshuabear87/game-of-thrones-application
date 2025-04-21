import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7, Menu } from '@mui/icons-material';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: darkMode ? '#333333' : '#EBD8B7', // Dark charcoal for dark mode, parchment for light mode
          color: darkMode ? '#C0C0C0' : '#4C4C4C', // Lighter text in dark mode
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Game of Thrones Explorer
          </Typography>

          {/* Dark mode toggle button */}
          <IconButton onClick={toggleDarkMode} sx={{ color: 'white' }}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* Hamburger Menu (Only visible on small screens) */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }} // Only show on small screens
          >
            <Menu />
          </IconButton>

          {/* Navigation Buttons (Only visible on larger screens) */}
          <Button
            component={Link}
            to="/"
            sx={{
              color: darkMode ? '#C0C0C0' : '#4C4C4C',
              display: { xs: 'none', sm: 'inline-block' }, // Only show on larger screens
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/books"
            sx={{
              color: darkMode ? '#C0C0C0' : '#4C4C4C',
              display: { xs: 'none', sm: 'inline-block' },
            }}
          >
            Books
          </Button>
          <Button
            component={Link}
            to="/characters"
            sx={{
              color: darkMode ? '#C0C0C0' : '#4C4C4C',
              display: { xs: 'none', sm: 'inline-block' },
            }}
          >
            Characters
          </Button>
          <Button
            component={Link}
            to="/houses"
            sx={{
              color: darkMode ? '#C0C0C0' : '#4C4C4C',
              display: { xs: 'none', sm: 'inline-block' },
            }}
          >
            Houses
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer (Side menu) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250, // Adjust width as needed
            backgroundColor: darkMode ? '#333333' : '#EBD8B7',
            color: darkMode ? '#C0C0C0' : '#4C4C4C',
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={() => toggleDrawer(false)}>
            <ListItemText
              primary="Home"
              sx={{
                color: darkMode ? 'white' : '#4C4C4C', // White text in dark mode, dark bronze in light mode
              }}
            />
          </ListItem>
          <ListItem button component={Link} to="/books" onClick={() => toggleDrawer(false)}>
            <ListItemText
              primary="Books"
              sx={{
                color: darkMode ? 'white' : '#4C4C4C', // White text in dark mode, dark bronze in light mode
              }}
            />
          </ListItem>
          <ListItem button component={Link} to="/characters" onClick={() => toggleDrawer(false)}>
            <ListItemText
              primary="Characters"
              sx={{
                color: darkMode ? 'white' : '#4C4C4C', // White text in dark mode, dark bronze in light mode
              }}
            />
          </ListItem>
          <ListItem button component={Link} to="/houses" onClick={() => toggleDrawer(false)}>
            <ListItemText
              primary="Houses"
              sx={{
                color: darkMode ? 'white' : '#4C4C4C', // White text in dark mode, dark bronze in light mode
              }}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
