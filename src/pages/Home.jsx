import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Hello! Welcome to the Game of Thrones Explorer
            </Typography>
            <Typography variant="body1">
                Explore the books, characters, and houses of the legendary world of Game of Thrones!
            </Typography>
        </Container>
    );
};

export default Home;