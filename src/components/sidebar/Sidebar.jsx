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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: 'transparent' }} className='drawer-container pt-[4rem] flex flex-col gap-2 bg-[rgba(10, 10, 73, 0.2)] overflow-auto scrollbar-hide'>
      <List sx={{ backgroundColor: 'transparent' }}>
        {[
          { text: 'Home', path: '/' },
          { text: 'About Me', path: '/about' },
          { text: 'Projects', path: '/projects' },
          { text: 'Resume', path: '/resume' },
          { text: 'Contact Me', path: '/contact-us' },
          { text: 'Blog Post', path: '/blog' },
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
            <section className='h-[14rem] w-full bg-[rgba(10, 10, 73, 0.2)] shadow-custom rounded-2xl relative'>
              <div className='shadow-custom border-2 border-[rgba(10, 10, 73, 0.2)] h-full rounded-2xl overflow-hidden'>
                <img
                  className='w-full h-full bg-cover'
                  src='https://pbs.twimg.com/media/F--THcTXIAAMb0K.jpg'
                  alt='photo'
                />
              </div>
            </section>
            <div className='bottom-[-10px] absolute bg-black opacity-70 w-full h-[50px] flex items-center justify-center pb-2 gap-4'>
              <Link to='https://www.linkedin.com/in/onaiterimoh-victor-idepe-40b516235' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/60/0f/0b/600f0bac329e4178179987f4d87fcfab.jpg' />
              </Link>
              <Link to='https://x.com/onaivictor?s=09' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/7f/e9/d7/7fe9d7012076dbda78e984253ee79f49.jpg' />
              </Link>
              <Link to='mailto:victoride013@gmail.com' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/cc/fd/22/ccfd2232408dfb656cf784eb8eb625f8.jpg' />
              </Link>
              <Link to='https://wa.link/p1m3cn' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/ef/5c/f1/ef5cf17b90ef75bab569c639b36e52f2.jpg' />
              </Link>
              <Link to='https://www.tiktok.com/@dev_movicx' className='bg-white w-[1.7rem] h-[1.7rem] rounded-[50%] flex items-center justify-center'>
                <img className='w-[1.3rem] h-[1.3rem] rounded-[50%]' src='https://i.pinimg.com/564x/80/2a/19/802a19bdfaec18f714d44db59b456a6e.jpg' />
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full h-[2px] bg-gray-300 mt-3'></div>
        <section className='w-full h-[auto] flex flex-col items-start'>
          <h1 className='text-lg text-blue-500'>Upcoming Tech Events</h1>
          <ul className='w-full flex flex-col gap-1 items-start pb-2'>
            <li className='text-gray-500'>No tech event available</li>
          </ul>
        </section>
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'white', borderRight: '3px solid #d1d5db' },
        }}
      >
        {drawer}
      </Drawer>
      {!isMobile && !isTablet && (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#fff', borderRight: '3px solid #d1d5db' },
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
