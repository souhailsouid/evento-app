import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: '552px',
    padding: '0 24px 20px 24px',
  },
  cancelButton: {
    color: 'red',
  },
  primaryColor: {
    color: 'rgb(255, 227, 192)',
  },
  text: {
    fontWeight: '900',
  },
  primaryBackground: {
    background: 'rgb(255, 227, 192)',
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: '600',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.primaryBackground}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Evento
          </Typography>
          <Link to="/" className={classes.linkStyle}>
            Home
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
