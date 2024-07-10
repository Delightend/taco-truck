import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './components/ProTip';
import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Paper,
  Toolbar,
} from '@mui/material';
import Switch from '@mui/material/Switch';


import logo from './assets/tacotimelogo.png';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/MenuBook';
import OrderIcon from '@mui/icons-material/ShoppingCart';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Avatar
              alt="Taco Time"
              src={logo}
              sx={{ width: 90, height: 90 }}
              variant='square'
            />
            <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontWeight: 600, }}>
              Taco Town
            </Typography>
            <Button color="inherit" href="/menu">Menu</Button>
            <Button color="inherit" href="/order">Order</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Create React App example in TypeScript
        </Typography>
        <ProTip />
        <Copyright />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
          <BottomNavigationAction label="Order" icon={<OrderIcon />} />
        </BottomNavigation>
      </Paper>
      </Box>
    </Container>
  );
}
