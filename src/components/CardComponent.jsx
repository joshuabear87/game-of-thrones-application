import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const CardComponent = ({ title, description, author, numberOfPages, culture, playedBy }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ margin: '10px' }}
    >
        <Card style={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>{title}</Typography>
                <Typography variant="body2">{description}</Typography>
                {author && <Typography variant="body2">{author}</Typography>}
                {numberOfPages && <Typography variant="body2">{numberOfPages}</Typography>}
                {culture && <Typography variant="body2">{culture}</Typography>}
                {playedBy && <Typography variant="body2">{playedBy}</Typography>}
            </CardContent>
        </Card>
    </motion.div>
);

export default CardComponent;