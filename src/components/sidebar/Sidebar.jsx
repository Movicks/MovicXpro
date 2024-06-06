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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: 'rgba(10, 10, 73, 0.2)' }} className='drawer-container pt-[4rem] flex flex-col gap-2 bg-[rgba(10, 10, 73, 0.2)]'>
      <List sx={{ backgroundColor: 'transparent' }}>
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
              background: location.pathname === item.path 
                ? 'linear-gradient(135deg, rgba(88, 99, 246, 0.76), rgba(10, 10, 73, 0.2))' 
                : 'transparent',
              ml: 0.5,
              borderTopLeftRadius: location.pathname === item.path ? '20px' : 0,
              borderBottomLeftRadius: location.pathname === item.path ? '20px' : 0,
              pt: 0.5,
              pb: 0.5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ListItemText primary={item.text} className='flex items-center mt-7 mb-7' />
          </ListItemButton>
        ))}
      </List>
      <div className='bg-gray-300 h-[2px]'></div>
      <section className='sidebar-profile pl-2 pr-2'>
        <div className='glass-effect-2 rounded-2xl overflow-hidden shadow-custom'>
          <div className='img-container pt-9 flex flex-col gap-3'>
            <div>
              <h1 className='text-white font-bold text-[16px]'>Onaiterimoh Victor Idepe</h1>
              <p className='text-gray-200'>Frontend Developer</p>
            </div>
            <section className='h-[17rem] bg-[rgba(10, 10, 73, 0.2)] shadow-custom rounded-2xl relative'>
              <div className='shadow-custom border-2 border-[rgba(10, 10, 73, 0.2)] h-full rounded-2xl overflow-hidden'>
                <img
                  className='w-full h-full bg-cover'
                  src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='photo'
                />
              </div>
            </section>
            <div className='bottom-[-10px] absolute bg-black opacity-70 w-full h-[50px] flex items-center justify-center pb-2 gap-4'>
              <Link to='#' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/60/0f/0b/600f0bac329e4178179987f4d87fcfab.jpg' />
              </Link>
              <Link to='#' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/7f/e9/d7/7fe9d7012076dbda78e984253ee79f49.jpg' />
              </Link>
              <Link to='#' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/cc/fd/22/ccfd2232408dfb656cf784eb8eb625f8.jpg' />
              </Link>
              <Link to='#' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/ef/5c/f1/ef5cf17b90ef75bab569c639b36e52f2.jpg' />
              </Link>
              <Link to='#' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/80/2a/19/802a19bdfaec18f714d44db59b456a6e.jpg' />
              </Link>
            </div>
          </div>
        </div>      
      </section>
    </Box>
  );

  return (
    <Box component="nav" className='nav'>
      <Drawer
        variant={(isMobile || isTablet) ? "temporary" : "permanent"}
        open={isMobile || isTablet ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#dfebfa' },
        }}
      >
        {drawer}
      </Drawer>
      {!isMobile && !isTablet && (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#dfebfa' },
          }}
          open
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;