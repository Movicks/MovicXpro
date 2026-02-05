import React from 'react';
import LogoAI from '../../assets/Images/MOVICX.png';

function Banner({ header, des }) {
  return (
    <section className='relative w-full h-full rounded-2xl overflow-hidden' style={{ backgroundImage: `url(${LogoAI})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='w-full h-full flex flex-col justify-center items-center gap-3 bg-black opacity-80'>
        <header className=' text-2xl font-bold bg-white px-6 uppercase py-2'>{header}</header>
        <div className='text-center text-white w-full px-4'>{des}</div>
      </div>
    </section>
  );
}

export default Banner;
