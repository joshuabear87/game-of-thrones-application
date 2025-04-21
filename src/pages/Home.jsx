import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: 4,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#4C4C4C', // text color
          fontFamily: '"Cinzel", serif',
          marginBottom: 3,
        }}
      >
        Welcome to the Game of Thrones Explorer
      </Typography>
      
      {/* Image with Circular Frame and Faded Edges */}
      <Box
        sx={{
          display: 'inline-block',
          borderRadius: '50%',
          overflow: 'hidden',
          width: 200,
          height: 200,
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.4)', // This creates a soft blur effect around the edges
          backgroundImage: 'url(/house-explorer-logo.PNG)', // Add your image path here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
};

export default Home;
