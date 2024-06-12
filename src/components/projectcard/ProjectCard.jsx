import React from 'react'
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';

function ProjectCard() {
  return (
    <ul className='w-full px-2 py-2 flex flex-wrap gap-2'>
        {[...Array(8)].map((_, index) => (
        <li key={index} className='Demo-Cards w-[19.3rem] h-auto'>
            <div className='bg-white h-auto Project-Card p-2 shadow-custom rounded-xl flex flex-col gap-2 border-2'>
            <div className='relative flex items-center justify-center mb-2 h-[10rem] Project-Image-container rounded-2xl overflow-hidden'>
                <img 
                src='https://media.istockphoto.com/id/912617272/photo/concept-of-digital-diagram-graph-interfaces-virtual-screen-connections-icon-on-blurred.jpg?s=2048x2048&w=is&k=20&c=g2wJd26WiNlIld_upj90IrjWZ-gEPmDsIwVW1_pRTM8=' 
                alt='Project'
                className='Project-Banner w-full h-full bg-cover rounded-2xl'
                />
                <div className='absolute bg-transparent w-full h-full flex flex-col justify-between p-2'>
                    <div className='bg-transparent w-full flex justify-end gap-3 items-center'>
                        <div className='px-3 rounded-2xl bg-white opacity-80'>
                        <span className='Like-Counts text-black'>1k</span>
                        </div>
                        <button className='Like-Project-btn p-1 bg-white rounded-full opacity-90'>
                        <CiHeart className='Like-Project-btn-Icon text-2xl' />
                        </button>
                    </div>
                    <div className=''>
                        <Link to='#' className='Demo bg-white opacity-90 px-4 py-2 rounded-3xl'>Demo</Link>
                    </div>
                </div>
            </div>
            <h1 className='font-bold text-md uppercase text-[#6371f6]'>Project 9</h1>
            <div className='w-full h-auto'>
                <p className='flex flex-wrap text-sm text-gray-400 text-start'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled
                it to make a type specimen book.
                </p>
            </div>
            <section className='flex flex-col gap-1 rounded-2xl'>
                <h1 className='text-md font-bold text-[#6371f6]'>Stacks</h1>
                <div className="w-full h-auto max-h-[5rem] gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex flex-wrap overflow-y-auto p-2">
                <span className="Html py-1 px-4 h-[2rem] m-0 rounded-3xl">HTML</span>
                <span className="CSS py-1 px-4 h-[2rem] m-0 rounded-3xl">CSS</span>
                <span className="React py-1 px-4 h-[2rem] m-0 rounded-3xl">React</span>
                <span className="Tailwindcss py-1 px-4 h-[2rem] m-0 rounded-3xl">Tailwindcss</span>
                </div>
            </section>
            </div>
        </li>
        ))}
    </ul>
  )
}

export default ProjectCard