import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardComponent = ({ title, description, author, numberOfPages, sx }) => {
    return (
        <Card
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#2C2C2C' : '#D4AF7F', // Charcoal for dark mode, lighter bronze color for light mode
                color: (theme) => (theme.palette.mode === 'dark' ? '#D0D0D0' : '#4C4C4C'), // Light text in dark mode, dark text in light mode
                boxShadow: 3,
                borderRadius: 2,
                padding: 2,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Transition for scaling and shadow
                '&:hover': {
                    transform: 'scale(1.05)', // Enlarge the card by 5% on hover
                    boxShadow: 6, // Increase the shadow on hover for more emphasis
                },
                ...sx, // Allow custom styles from the parent
            }}
        >
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {numberOfPages}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
