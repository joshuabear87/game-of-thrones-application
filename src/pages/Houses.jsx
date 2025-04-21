import React, { useState, useEffect } from 'react';
import { Box, TextField, Grid } from '@mui/material';
import CardComponent from '../components/CardComponent';
import axios from 'axios';

const Houses = () => {
    const [houses, setHouses] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get('https://anapioficeandfire.com/api/houses?page=1&pageSize=100')
            .then(response => {
                console.log(response.data);
                setHouses(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    // Filter houses based on the search filter
    const filteredHouses = houses.filter(house =>
        house.name && house.name.toLowerCase().includes(filter)
    );

    return (
        <Box
            sx={{
                minHeight: '100vh',
                padding: 4,
                color: '#4C4C4C',
            }}
        >
            <TextField
                label="Search Houses"
                variant="outlined"
                fullWidth
                onChange={(e) => setFilter(e.target.value.toLowerCase())}
                sx={{
                    marginBottom: 4,
                    backgroundColor: '#F9F9F9',
                    input: {
                        color: '#4C4C4C',
                        fontFamily: '"Cinzel", serif',
                    },
                    label: {
                        color: '#6B6B6B',
                        fontFamily: '"Cinzel", serif',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#A67C52',
                        },
                        '&:hover fieldset': {
                            borderColor: '#8B6A4D',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#8B6A4D',
                        },
                    },
                }}
            />
            <Grid container spacing={3}>
                {filteredHouses.map(house => (
                    <Grid item xs={12} sm={6} md={4} key={house.url}>
                        <CardComponent
                            title={house.name || 'Unknown'}
                            description={house.region || 'Unknown Region'}
                            coatOfArms={house.coatOfArms || 'Unknown Coat of Arms'}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Houses;
