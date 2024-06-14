import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';

// Mock API fetch function
const fetchProjects = async () => {
  // Replace this with your actual API call
  return [
    { id: 1, name: 'Project 1', description: 'Lorem Ipsum...', likeCount: 100, stacks: ['HTML', 'CSS', 'React', 'Tailwindcss'] },
    { id: 2, name: 'Project 2', description: 'Lorem Ipsum...', likeCount: 200, stacks: ['HTML', 'CSS', 'React', 'Tailwindcss'] },
    { id: 3, name: 'Project 3', description: 'Lorem Ipsum...', likeCount: 300, stacks: ['HTML', 'CSS', 'React', 'Tailwindcss'] },
    { id: 4, name: 'Project 4', description: 'Lorem Ipsum...', likeCount: 400, stacks: ['HTML', 'CSS', 'React', 'Tailwindcss'] },
    { id: 5, name: 'Project 5', description: 'Lorem Ipsum...', likeCount: 500, stacks: ['HTML', 'CSS', 'React', 'Tailwindcss'] },
    { id: 6, name: 'Project 6', description: 'Lorem Ipsum...', likeCount: 600, stacks: ['HTML', 'CSS', 'React', 'Tailwindcss'] },
    // Add more projects here
  ];
};

function ProjectCard() {
  const [projects, setProjects] = useState([]);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetchProjects();
      setProjects(projects);
      setLiked(Array(projects.length).fill(false));
    };

    getProjects();
  }, []);

  const handleLike = (index) => {
    const newLiked = [...liked];
    const newProjects = [...projects];

    if (newLiked[index]) {
      newProjects[index].likeCount -= 1;
    } else {
      newProjects[index].likeCount += 1;
    }

    newLiked[index] = !newLiked[index];

    setLiked(newLiked);
    setProjects(newProjects);
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
    <ul className='w-full px-2 py-2 flex flex-wrap gap-2'>
      {projects.map((project, index) => (
        <li key={project.id} className='Demo-Cards w-[19.3rem] h-auto'>
          <div className='bg-white h-auto Project-Card p-2 shadow-custom rounded-xl flex flex-col gap-2 border-2'>
            <div className='relative flex items-center justify-center mb-2 h-[10rem] Project-Image-container rounded-2xl overflow-hidden'>
              <img 
                src='https://media.istockphoto.com/id/912617272/photo/concept-of-digital-diagram-graph-interfaces-virtual-screen-connections-icon-on-blurred.jpg?s=2048x2048&w=is&k=20&c=g2wJd26WiNlIld_upj90IrjWZ-gEPmDsIwVW1_pRTM8=' 
                alt='Project'
                className='Project-Banner w-full h-full bg-cover rounded-2xl hover:animate-breath'
              />
              <div className='absolute bg-transparent w-full h-full flex flex-col justify-between p-2'>
                <div className='bg-transparent w-full flex justify-end gap-3 items-center'>
                  <div className='px-3 rounded-2xl bg-white opacity-80'>
                    <span className='Like-Counts text-black'>{formatCount(project.likeCount)}</span>
                  </div>
                  <button 
                    className='Like-Project-btn p-1 bg-white rounded-full opacity-90' 
                    onClick={() => handleLike(index)}
                  >
                    <CiHeart className={`Like-Project-btn-Icon text-2xl ${liked[index] ? 'text-[#4759fc]' : 'text-black'}`} />
                  </button>
                </div>
                <div className=''>
                  <Link to='#' className='Demo bg-white opacity-90 px-4 py-2 rounded-3xl'>Demo</Link>
                </div>
              </div>
            </div>
            <h1 className='font-bold text-md uppercase text-[#6371f6]'>{project.name}</h1>
            <div className='w-full h-auto'>
              <p className='flex flex-wrap text-sm text-gray-400 text-start'>
                {project.description}
              </p>
            </div>
            <section className='flex flex-col gap-1 rounded-2xl'>
              <h1 className='text-md font-bold text-[#6371f6]'>Stacks</h1>
              <div className="w-full h-auto max-h-[5rem] gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex flex-wrap overflow-y-auto p-2">
                {project.stacks.map((stack, stackIndex) => (
                    <span key={stackIndex} className={`${stack} py-1 px-4 h-[2rem] m-0 rounded-3xl`}>{stack}</span>
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
