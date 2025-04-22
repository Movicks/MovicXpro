// MyApp.jsx
import Root from './layout/Root';
import MainLayout from './layout/MainLayout';
import HomePage from './views/home/HomePage';
import AboutPage from './views/about/AboutPage';
import ProjectsPage from './views/projects/ProjectsPage';
import ResumePage from './views/resume/ResumePage';
import ContactPage from './views/contact/ContactPage';
import BlogPost from './views/blog/BlogPost';
import NotFound from './layout/NotFound';
import { LazyComponent } from './components/loading/LazyComponent';

export {
    Root,
    MainLayout,
    NotFound,
    HomePage,
    AboutPage,
    ProjectsPage,
    ResumePage,
    ContactPage,
    BlogPost,
    LazyComponent
}