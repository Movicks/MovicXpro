import React, { useEffect } from 'react';
import { Drawer, List, ListItemButton, ListItemText, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ mobileOpen, handleDrawerToggle, isMobile, isTablet }) => {
  const drawerWidth = 240;
  const location = useLocation();

  // Function to calculate milliseconds until 12 AM
  const getMillisecondsUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime() - now.getTime();
  };

  // Setting up a timer to refresh the page at 12 AM
  useEffect(() => {
    const millisecondsUntilMidnight = getMillisecondsUntilMidnight();
    const timer = setTimeout(() => {
      window.location.reload();
    }, millisecondsUntilMidnight);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className='Drawer-container pt-[4rem]'>
      <List sx={{ backgroundColor: 'red' }}>
        {[
          { text: 'Home', path: '/' },
          { text: 'About Me', path: '/about' },
          { text: 'Contact Me', path: '/contact-us' },
          { text: 'Blog Post', path: '/blog' },
          { text: 'Projects', path: '/projects' },
        ].map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              backgroundColor: location.pathname === item.path ? 'white' : 'transparent',
              ml: 0.5,
              borderTopLeftRadius: location.pathname === item.path ? '20px' : 0,
              borderBottomLeftRadius: location.pathname === item.path ? '20px' : 0,
            }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      <section className='Sidebar-Profile glass-effect-2 p-2 mt-5'>
        <div className='glass-effect-2'>
          <div className='imgContainer'>
            Victor pics
          </div>
        </div>
      </section>
    </Box>
  );

  return (
    <Box component="nav" className='Nav'>
      <Drawer
        variant={(isMobile || isTablet) ? "temporary" : "permanent"}
        open={isMobile || isTablet ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'white' },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'white' },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
