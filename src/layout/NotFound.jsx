// import React from 'react'

import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate()
  
      const handleClick = () => {
          navigate(-1);
      }
    return (
        <section className='w-full h-screen flex flex-col items-center justify-center gap-3'>
            <h1 className='text-6xl md:text-8xl font-poppins-bold text-[#7d89eb]'>Oops!</h1>
            <div className='w-full px-[1rem] md:px-0 md:max-w-[26rem] flex flex-col items-center justify-center gap-3'>
                <b className='uppercase text-lg font-poppins-bold'>404 - page not found</b>
                <p className='text-center text-md text-gray-500'>The page you are looking for might have been removed, had it's name changed or it's unavailable</p>
                <button className='bg-[#6371f6] px-9 py-2 text-white rounded-xl' onClick={handleClick}>Go Back</button>
            </div>
            <section className='w-full flex items-center justify-center px-2'>
              <div className='w-full max-w-[17rem] h-[auto] flex items-center gap-2'>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <span className='text-gray-400'>OR</span>
                <div className='w-full h-[2px] bg-gray-300'></div>
              </div>
            </section>
            <div className='flex items-center gap-1'>
                <p className='text-gray-500'>Go to back</p>
                <Link to="/" className='text-[#6371f6] underline hover:text-[#5666fe]'>Home</Link>
            </div>
        </section>
    )
  }
