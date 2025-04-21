
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import ProjectCard from '../../components/projectcard/ProjectCard';

function ProjectsPage() {
  return (
    <section className='h-[100vh] w-full flex Project bg-white'>
      <main className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl h-[100vh] flex-grow flex flex-col justify-between'>
        <div className='Home-box pt-3 w-full flex-grow overflow-auto'> 
          <section className='Banner-container w-full h-[17rem] px-2'>
            <Banner header='My Projects' des='Building innovative user friendly projects that meets clients needs.'/>
          </section>
          <section className='Project-Card-CONTAINER h-auto'>
            <ProjectCard/>
          </section>
          <Footer/>
        </div>
      </main>
    </section>
  );
}

export default ProjectsPage;
