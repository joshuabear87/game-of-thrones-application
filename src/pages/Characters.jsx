import React, { useState, useEffect } from 'react';
import { Box, TextField, Grid } from '@mui/material';
import CardComponent from '../components/CardComponent';
import axios from 'axios';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios
            .get('https://anapioficeandfire.com/api/characters?page=1&pageSize=150')
            .then(response => {
                console.log(response.data);
                setCharacters(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    // Filter out characters without a name and based on search filter
    const filteredCharacters = characters.filter(character =>
        character.name && character.name.toLowerCase().includes(filter)
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
                label="Search Characters"
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
                {filteredCharacters.map(character => (
                    <Grid item xs={12} sm={6} md={4} key={character.url}>
                        <CardComponent
                            title={character.name}
                            description={`Gender: ${character.gender || 'Unknown'}`}
                            culture={`Culture: ${character.culture || 'Unknown Culture'}`}
                            playedBy={`Played By: ${character.playedBy.length > 0 ? character.playedBy.join(', ') : 'Unknown Actor'}`}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Characters;
