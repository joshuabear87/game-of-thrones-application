import React from "react";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position='static' >
            <Toolbar>
                <Typography variant='h6' style={{ flexGrow: 1 }}>
                    Game of Thrones Explorer
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/books">Books</Button>
                <Button color="inherit" component={Link} to="/characters">Characters</Button>
                <Button color="inherit" component={Link} to="/houses">Houses</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
