import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import localFont from "next/font/local";


const protestStrikeFont = localFont({
  src: "../fonts/ProtestStrike-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {

 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
       
        <Toolbar disableGutters>
      
      
      
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;