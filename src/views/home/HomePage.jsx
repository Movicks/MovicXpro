import React from 'react';

function HomePage() {
  return (
    <section className='h-[100vh] w-full flex Home hide-scrollbar'>
      <div className='Dashboard-resDiv-home w-[23.5rem] bg-gray-300'></div>
      <section className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl shadow-lg flex-grow'>
        <div className='Home-box pt-3 w-full'>
          <section className='bg-white w-full h-[30rem]'>
            <div>Home 1</div>
          </section>
          <section>2</section>
        </div>
      </section>
    </section>
  );
}

export default HomePage;
