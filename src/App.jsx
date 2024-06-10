import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useState } from "react";
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from './components/sidebar/Sidebar';

// Import views using lazy loading
const Home = lazy(() => import('./views/home/HomePage'));
const About = lazy(() => import('./views/about/AboutPage'));
const Contact = lazy(() => import('./views/contact/ContactPage'));
const Blog = lazy(() => import('./views/blog/BlogPost'));
const Projects = lazy(() => import('./views/projects/ProjectsPage'));

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }} className='bg-cover '>
        <AppBar 
          position="fixed" 
          sx={{ 
            zIndex: (theme) => theme.zIndex.drawer + 1, 
            backgroundColor: 'white',
            color: 'black',
            backdropFilter: 'blur(30px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Toolbar className='pt-2'>
            {(isMobile || isTablet) && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1 }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
            <Typography variant="h6" noWrap component="div">
              <div className='relative w-[7.5rem]'>
                <h1 className='text-2xl h-[3rem] flex items-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500'>
                  <span>M</span>ovic<span className='X-styles'>X</span>
                </h1>
                <span className='h-[1.5rem] flex items-center absolute pl-1 pr-1 pt-1 pb-1 right-0 top-[2px] text-black text-lg bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 text-white rounded-[4px]'>Pro</span>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} isTablet={isTablet} />
        <Box component="main" sx={{ flexGrow: 1, pt: 7.5, overflow: 'auto', height: '100vh', backgroundColor: 'transparent' }} className='overflow-auto scrollbar-hide'>
          <Routes>
            <Route path='/' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">Loading...</div>}><Home /></Suspense>} />
            <Route path='/about' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">Loading...</div>}><About /></Suspense>} />
            <Route path='/contact-us' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">Loading...</div>}><Contact /></Suspense>} />
            <Route path='/blog' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">Loading...</div>}><Blog /></Suspense>} />
            <Route path='/projects' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">Loading...</div>}><Projects /></Suspense>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
