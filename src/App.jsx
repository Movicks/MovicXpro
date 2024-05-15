import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from "react";



// Import views using lazy loading
const Home = lazy(() => import('./views/home/HomePage'));
const About = lazy(() => import('./views/about/AboutPage'));
const Contact = lazy(() => import('./views/contact/ContactPage'));
const Blog = lazy(() => import('./views/blog/BlogPost'));
const Projects = lazy(() => import('./views/projects/ProjectsPage'));

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Home /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><About /></Suspense>}/>
        <Route path='/contact-us' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Contact /></Suspense>} />
        <Route path='/blog' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Blog /></Suspense>}/>
        <Route path='/projects' element={<Suspense fallback={<div className="flex items-center justify-center h-[100vh]">Loading...</div>}><Projects /></Suspense>}/>
      </Routes>
    </Router>
  )
}

export default App
