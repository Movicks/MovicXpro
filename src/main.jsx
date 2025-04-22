import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Root, MainLayout, NotFound, LazyComponent } from "./MyApp";

// Lazy-loaded page components
export const HomePage = lazy(() => import("./views/home/HomePage"));
export const AboutPage = lazy(() => import("./views/about/AboutPage"));
export const ProjectsPage = lazy(() => import("./views/projects/ProjectsPage"));
export const ResumePage = lazy(() => import("./views/resume/ResumePage"));
export const ContactPage = lazy(() => import("./views/contact/ContactPage"));
export const BlogPost = lazy(() => import("./views/blog/BlogPost"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route element={<MainLayout />}>
        <Route index element={<LazyComponent Component={HomePage} />} />
        <Route path="about" element={<LazyComponent Component={AboutPage} />} />
        <Route path="projects" element={<LazyComponent Component={ProjectsPage} />} />
        <Route path="resume" element={<LazyComponent Component={ResumePage} />} />
        <Route path="contact" element={<LazyComponent Component={ContactPage} />} />
        <Route path="blog" element={<LazyComponent Component={BlogPost} />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);