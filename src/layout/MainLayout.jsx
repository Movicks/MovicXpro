import { Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from "../components/sidebar/Sidebar";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

function MainLayout() {
    const [navWidth, setNavWidth] = useState(240);
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:960px)');
    const mainRef = useRef(null);
    
    // const trigger = useScrollTrigger({
    //     disableHysteresis: true,
    //     threshold: 50,
    //     target: mainRef.current ?? undefined,
    // });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavWidthChange = (newWidth) => {
        setNavWidth(newWidth);
    };
    

    return (
        <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
            <CssBaseline />
            
            {/* AppBar - Always on top */}
            <AppBar 
                position="fixed"
                sx={{ 
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                    // backgroundColor: trigger ? "#f2f2f2" : "transparent",
                    backgroundColor: '#171717',
                    color: 'black',
                    backdropFilter: 'blur(30px)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    borderBottom: '1px solid rgb(255 255 255 / 0.15)'
                }}
                className="bg-red-500"
            >
                <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', items: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', items: 'center' }}>
                        {(isMobile || isTablet) && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 1, color: '#fff' }}
                            >
                                {mobileOpen ? <CloseIcon /> : <WidgetsOutlinedIcon />}
                            </IconButton>
                        )}
                        <Typography variant="h6" noWrap component="div">
                            <div className='relative w-[7.5rem] flex items-center'>
                                <h1 className='text-2xl h-[3rem] flex items-center font-bold gradient-text '>
                                    <span>M</span>ovic<span className='X-styles'>X</span>
                                </h1>
                                <span className='h-[1.5rem] flex items-center absolute pl-1 pr-1 pt-1 pb-1 right-0 top-[2px] text-lg bg-gradient-to-r from-black via-gray-400 to-black text-white rounded-[4px]'>Pro</span>
                            </div>
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', items: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="GitHub"
                            edge="end"
                            href="https://github.com/Movicks"
                            target="_blank"
                            rel="noopener noreferrer"
                            // sx={{
                            //     '&:hover': {
                            //         color: 'red'
                            //     }
                            // }}
                        >
                            <FaGithub className='text-3xl text-white'/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Sidebar - Below AppBar but interactive */}
            <Sidebar 
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                isMobile={isMobile}
                isTablet={isTablet}
                onWidthChange={handleNavWidthChange}
                navWidth={navWidth}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    '& .MuiDrawer-paper': {
                        top: '64px',
                        Padding: '20px',
                        height: 'calc(100vh - 64px)',
                        ...((isMobile || isTablet) && {
                            top: 0,
                            height: '100vh'
                        })
                    }
                }}
            />

            {/* Main Content */}
            <Box 
                ref={mainRef}
                component="main"
                sx={{
                    flexGrow: 1,
                    pt: '64px',
                    pl: { sm: `${!(isMobile || isTablet) ? navWidth : 0}px` },
                    transition: (theme) => theme.transitions.create('padding'),
                    width: '100%',
                    height: 'calc(100vh)',
                    overflow: 'auto'
                }}
                className='no-scrollbar bg-black'
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export default MainLayout;