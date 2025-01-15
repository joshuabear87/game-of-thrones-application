import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CardComponent from '../components/CardComponent';
import axios from 'axios';

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get('https://anapioficeandfire.com/api/characters?page=1&pageSize=150')
            .then(response => {
                console.log(response.data);
                setCharacters(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    // Filter out characters without a name
    const filteredCharacters = characters.filter(character => character.name);

    return (
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
    );
};

export default Characters;