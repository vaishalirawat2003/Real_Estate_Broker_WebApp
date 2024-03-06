import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Real Estate Broker
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
          <List sx={{ width: 250 }} onClick={toggleDrawer}>
            <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton component={Link} to="/portfolio" onClick={toggleDrawer}>
              <ListItemText primary="Portfolio" />
            </ListItemButton>
            <ListItemButton component={Link} to="/watchlist" onClick={toggleDrawer}>
              <ListItemText primary="Watchlist" />
            </ListItemButton>
            <ListItemButton component={Link} to="/funds" onClick={toggleDrawer}>
              <ListItemText primary="Funds" />
            </ListItemButton>
            <ListItemButton component={Link} to="/login" onClick={toggleDrawer}>
              <ListItemText primary="Register/Login" />
            </ListItemButton>
            <ListItemButton component={Link} to="/support" onClick={toggleDrawer}>
              <ListItemText primary="Support" />
            </ListItemButton>
          </List>
        </Drawer>
        <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', md: 'block' } }}>Home</Button>
        <Button color="inherit" component={Link} to="/portfolio" sx={{ display: { xs: 'none', md: 'block' } }}>Portfolio</Button>
        <Button color="inherit" component={Link} to="/watchlist" sx={{ display: { xs: 'none', md: 'block' } }}>Watchlist</Button>
        <Button color="inherit" component={Link} to="/funds" sx={{ display: { xs: 'none', md: 'block' } }}>Funds</Button>
        <Button color="inherit" component={Link} to="/login" sx={{ display: { xs: 'none', md: 'block' } }}>Register/Login</Button>
        <Button color="inherit" component={Link} to="/support" sx={{ display: { xs: 'none', md: 'block' } }}>Support</Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
