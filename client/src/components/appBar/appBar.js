import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  primaryBackground: {
    background: 'rgb(255, 227, 192)',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '20%',
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  typography: {
    '&.css-1juivf6-MuiTypography-root': {
      maxWidth: '50%',
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.primaryBackground}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className={classes.typography}
          >
            Evento
          </Typography>
          <div className={classes.linkContainer}>
            <Link to="/" className={classes.linkStyle}>
              Home
            </Link>
            <Link to="/histogram" className={classes.linkStyle}>
              Consulter l'histograme
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
