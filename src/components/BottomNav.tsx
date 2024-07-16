import * as React from 'react';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  BottomNavigation,
  BottomNavigationAction,
  // Button,
  Paper,
} from '@mui/material';


import HomeIcon from '@mui/icons-material/Home';
import OrderIcon from '@mui/icons-material/ShoppingCart';

const pages = [
  { name: "Home", icon: <HomeIcon />, path: '/' },
  { name: "Cart", icon: <OrderIcon />, path: '/Cart' },
];

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box sx={{ my: 4 }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels={false}
            value={value}
            onChange={(_event, newValue) => {
            setValue(newValue);
          }}
          >
            {pages.map((page) => (
              <BottomNavigationAction icon={page.icon} component={Link} href={page.path} />
             ))}
        </BottomNavigation>
      </Paper>
      </Box>
    </Container>
  );
}
