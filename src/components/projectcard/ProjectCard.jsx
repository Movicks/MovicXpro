// src/ProjectCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import ProjectCardItems from './ProjectData';

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
    <ul className='w-full px-2 py-2 flex flex-wrap gap-2'>
      {ProjectCardItems.slice(0).reverse().map((project, index) => ( 
        <li key={project.id} className='Demo-Cards w-[19.3rem] h-[auto]'>
          <div className='bg-white Project-Card p-2 shadow-custom h-[28rem] rounded-xl flex flex-col gap-2 border-2'>
            <div className='relative flex items-center justify-center mb-2 h-[10rem] Project-Image-container rounded-2xl overflow-hidden'>
              <img 
                src={project.Image} 
                alt='Project'
                className='Project-Banner w-full h-full bg-cover rounded-2xl hover:animate-breath'
              />
              <div className='absolute bg-transparent w-full h-full flex flex-col justify-between p-2'>
                <div className='bg-transparent w-full flex justify-end gap-3 items-center'>
                  <div className='px-3 rounded-2xl bg-white opacity-80'>
                    <span className='Like-Counts text-black'>{formatCount(project.likeCount)}</span>
                  </div>
                  <Link to={project.link}
                    className='Like-Project-btn p-1 bg-white rounded-full opacity-90' 
                    onClick={() => handleLike(index)}
                  >
                    <FaGithub className={`Like-Project-btn-Icon text-2xl ${liked[index] ? 'text-[#4759fc]' : 'text-black'}`} />
                  </Link>
                </div>
                <div className=''>
                  <Link to={project.demo} className='Demo bg-white opacity-90 px-4 py-2 rounded-3xl'>Live Preview</Link>
                </div>
              </div>
            </div>
            <h1 className='font-bold text-md uppercase text-[#6371f6]'>{project.name}</h1>
            <div className='w-full h-[9rem] lg:h-[7rem] overflow-y-auto'>
              <p className='flex flex-wrap text-sm text-gray-400 text-start'>
                {project.description}
              </p>
            </div>
            <section className='flex flex-col gap-1 rounded-2xl'>
              <h1 className='text-md font-bold text-[#6371f6]'>Stacks</h1>
              <div className="w-full h-auto max-h-[5rem] gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex flex-wrap overflow-y-auto p-2">
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
