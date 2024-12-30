import React from 'react'
import Footer from '../../components/footer/Footer';
import Timeline from '../../components/timeline/Timeline';
import Banner from '../../components/banner/Banner';

function ResumePage() {
  return (
    <section className='h-[100vh] w-full flex Home'>
      <div className='Dashboard-resDiv min-w-[15rem] bg-gray-300'></div>
      <main className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl h-full flex-grow'>
        <div className='Home-box pt-3 w-full'>
          <section className='Banner-container w-full h-[17rem] px-2'>
            <Banner header='My Resume' des='My Career'/>
          </section>
          <section>
            <Timeline/>
          </section>
          <Footer/>
        </div>
      </main>
    </section>
  );
}

export default ResumePage