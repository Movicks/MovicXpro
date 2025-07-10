import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import ProjectCardItems from '../../data/ProjectData';

function ProjectCard() {
  const [liked, setLiked] = useState([]);

  // Initialize liked state based on the length of ProjectCardItems
  useState(() => {
    setLiked(Array(ProjectCardItems.length).fill(false));
  });

  const handleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    } else {
      return count.toString();
    }
  };

  return (
    <ul className='grid justify-center w-full grid-cols-1 gap-4 px-2 py-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-2 lg:justify-start lg:px-2'>
      {ProjectCardItems.slice(0).reverse().map((project, index) => ( 
        <li key={project.id} className='Demo-Cards h-[auto]'>
          <div className='bg-white Project-Card p-2 shadow-custom h-[28rem] rounded-xl flex flex-col gap-2 border-2'>
            <div className='relative flex items-center justify-center mb-2 h-[10rem] Project-Image-container rounded-2xl overflow-hidden'>
              <img 
                src={project.Image} 
                alt='Project'
                className='w-full h-full bg-cover Project-Banner rounded-2xl hover:animate-breath'
              />
              <div className='absolute flex flex-col justify-between w-full h-full p-2 bg-transparent'>
                <div className='flex items-center justify-end w-full gap-3 bg-transparent'>
                  <div className='px-3 bg-white rounded-2xl opacity-80'>
                    <span className='text-black Like-Counts'>{formatCount(project.likeCount)}</span>
                  </div>
                  <a href={project.link}
                    className='p-1 bg-white rounded-full Like-Project-btn opacity-90' 
                    onClick={() => handleLike(index)}
                  >
                    <FaGithub className={`Like-Project-btn-Icon text-2xl ${liked[index] ? 'text-[#4759fc]' : 'text-black'}`} />
                  </a>
                </div>
                <div className=''>
                  <a href={project.demo} className='px-4 py-2 bg-white Demo opacity-90 rounded-3xl'>Live Preview</a>
                </div>
              </div>
            </div>
            <h1 className='font-bold text-md uppercase text-[#6371f6]'>{project.name}</h1>
            <div className='w-full h-[9rem] lg:h-[7rem] overflow-y-auto no-scrollbar'>
              <p className='flex flex-wrap text-sm text-gray-400 text-start'>
                {project.description}
              </p>
            </div>
            <section className='flex flex-col gap-1 rounded-2xl'>
              <h1 className='text-md font-bold text-[#6371f6]'>Stacks</h1>
              <div className="w-full h-auto max-h-[5rem] gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex flex-wrap overflow-y-auto p-2 no-scrollbar">
                {project.stacks.map((stack, stackIndex) => (
                    <span key={stackIndex} className={`HTML py-1 px-4 h-[2rem] m-0 rounded-3xl`}>{stack}</span>
                ))}
              </div>
            </section>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProjectCard;
