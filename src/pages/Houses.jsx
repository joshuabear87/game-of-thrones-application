import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CardComponent from '../components/CardComponent';
import axios from 'axios';

const Houses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios.get('https://anapioficeandfire.com/api/houses?page=1&pageSize=100')
            .then(response => {
                console.log(response.data)
                setHouses(response.data)
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <Grid container spacing={3}>
            {houses.map(house => (
                <Grid item xs={12} sm={6} md={4} key={house.url}>
                    <CardComponent
                        title={house.name || 'Unknown'}
                        description={house.region || 'Unknown Region'}
                        coatOfArms={house.coatOfArms || 'Unknown Coat of Arms'}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Houses;