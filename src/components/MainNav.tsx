import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { AppBar, Button, Toolbar } from '@mui/material';
import { Image } from 'mui-image';

export default function MainNav(){
  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        
        <Image src={require(`../assets/tacotimelogo.png`)} duration={325} width={90} height={'auto'} />
        <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontWeight: 600, }}>
          TACO TOWN
        </Typography>
        <Button color="inherit" href="/" component={Link}>Home</Button>
        <Button color="inherit" href="/Cart" component={Link}>Cart</Button>
      </Toolbar>
    </AppBar>
  );
}
