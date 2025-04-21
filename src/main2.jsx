// // import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// import {
//     Root,
//     MainLayout,
//     NotFound,
//     HomePage,
//     AboutPage,
//     ProjectsPage,
//     ResumePage,
//     ContactPage,
//     BlogPost
// } from "./MyApp";
// import React from "react";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route path="/" element={<Root />} errorElement={<NotFound />}>
//           <Route path="" element={<MainLayout />}>
//               <Route path="" element={<HomePage />} />
//               <Route path="about" element={<AboutPage />} />
//               <Route path="projects" element={<ProjectsPage />} />
//               <Route path="resume" element={<ResumePage />} />
//               <Route path="contact" element={<ContactPage />} />
//               <Route path="blog" element={<BlogPost />} />
//           </Route>
//       </Route>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );