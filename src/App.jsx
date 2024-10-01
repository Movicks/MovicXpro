import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FaGithub } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from './components/sidebar/Sidebar';
import WelcomeLogoAI from './assets/Images/LogoAIW2.png';
import CustomError from "./views/customerror/CustomError";

// Importing views using lazy loading
const Home = lazy(() => import('./views/home/HomePage'));
const About = lazy(() => import('./views/about/AboutPage'));
const Contact = lazy(() => import('./views/contact/ContactPage'));
const Blog = lazy(() => import('./views/blog/BlogPost'));
const Projects = lazy(() => import('./views/projects/ProjectsPage'));
const ResumePage = lazy(() => import('./views/resume/ResumePage'));

const INACTIVITY_LIMIT = 20 * 60 * 1000; // 20 minutes in milliseconds

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const updateLastActivity = () => {
    localStorage.setItem('lastActivity', new Date().getTime().toString());
  };

  useEffect(() => {
    // Update last activity on various user actions
    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    events.forEach(event => window.addEventListener(event, updateLastActivity));

    // Check last activity on load
    const lastActivity = parseInt(localStorage.getItem('lastActivity'), 10);
    const currentTime = new Date().getTime();

    if (!lastActivity || (currentTime - lastActivity) > INACTIVITY_LIMIT) {
      setShowWelcome(true);
    }

    return () => {
      events.forEach(event => window.removeEventListener(event, updateLastActivity));
    };
  }, []);

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  if (showWelcome) {
    return (
      <div className="relative flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-white overflow-hidden">
        <div className='absolute w-[18.7rem] h-[auto] bg-cover flex items-end justify-center' style={{ zIndex: 2 }}>
          <img src={WelcomeLogoAI} alt='Photo' className='w-full animate-breath' />
          <h1 className='absolute text-gray-400 text-3xl ml-6'>Portfolio</h1>
        </div>

        {/* Bubbles for mobile only */}
        <div className="absolute top-0 left-1/4 transform -translate-x-1/2 animate-bounceVertical bg-[#6371f6] rounded-full w-8 h-8 md:hidden"></div>
        <div className="absolute top-0 left-3/4 transform -translate-x-1/2 animate-bounceVerticalReverse bg-[#6371f6] rounded-full w-8 h-8 md:hidden"></div>
        <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 animate-bounceVerticalReverse bg-[#6371f6] rounded-full w-8 h-8 md:hidden"></div>
        <div className="absolute bottom-0 left-3/4 transform -translate-x-1/2 animate-bounceVertical bg-[#6371f6] rounded-full w-8 h-8 md:hidden"></div>
        
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-bounceHorizontal bg-[#6371f6] rounded-full w-8 h-8 md:hidden"></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 animate-bounceHorizontalReverse bg-[#6371f6] rounded-full w-8 h-8 md:hidden"></div>
        <div className="absolute top-1/4 left-0 transform -translate-y-1/2 animate-bounceHorizontalReverse bg-[#6371f6] rounded-full w-8 h-8 md:hidden"></div>
        <div className="absolute top-3/4 right-0 transform -translate-y-1/2 animate-bounceHorizontal bg-[#6371f6] rounded-full w-8 h-8 md:hidden"></div>

        <div className="lds-ripple" style={{ color: 'red', zIndex: 1 }}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer />

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
          <Toolbar className='pt-2' sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                  <span className='h-[1.5rem] flex items-center absolute pl-1 pr-1 pt-1 pb-1 right-0 top-[2px] text-lg bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 text-white rounded-[4px]'>Pro</span>
                </div>
              </Typography>
            </Box>
            <IconButton
              color="inherit"
              aria-label="GitHub"
              edge="end"
              href="https://github.com/Movicks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className='text-3xl'/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} isTablet={isTablet} />
        <Box component="main" sx={{ flexGrow: 1, pt: 7.5, overflow: 'auto', height: '100vh', backgroundColor: 'transparent' }} className='overflow-auto scrollbar-hide'>
          <Routes>
            <Route path='/' element={
              <Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">
                <svg className="container" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
                  <path className="track" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
                  <path className="car" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
                </svg>
              </div>}><Home />
              </Suspense>}
            />
            <Route path='/about' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">
              <svg className="container" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
                <path className="track" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
                <path className="car" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
              </svg>
            </div>}><About />
            </Suspense>}
            />
            <Route path='/contact' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">
              <svg className="container" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
                <path className="track" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
                <path className="car" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
              </svg>
            </div>}><Contact />
            </Suspense>}
            />
            <Route path='/blog' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">
              <svg className="container" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
                <path className="track" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
                <path className="car" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
              </svg>
            </div>}><Blog />
            </Suspense>}
            />
            <Route path='/projects' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">
              <svg className="container" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
                <path className="track" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
                <path className="car" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
              </svg>
            </div>}><Projects />
            </Suspense>}
            />
            <Route path='/resume' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">
              <svg className="container" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
                <path className="track" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
                <path className="car" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
              </svg>
            </div>}><ResumePage />
            </Suspense>}
            />
            {/*Error page*/}

            <Route path='*' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh] w-[100vw]">
              <svg className="container" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
                <path className="track" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
                <path className="car" strokeWidth={4} fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" />
              </svg>
            </div>}><CustomError />
            </Suspense>}
            />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
