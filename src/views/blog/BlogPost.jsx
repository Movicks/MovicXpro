import React from 'react'
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';

function BlogPost() {
  return (
    <section className='h-[100vh] w-full flex Home overflow-auto scrollbar-hide '>
      <div className='Dashboard-resDiv w-[23.5rem] bg-gray-300 overflow-auto scrollbar-hide'></div>
      <main className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl h-[100vh] shadow-lg flex-grow overflow-auto scrollbar-hide'>
        <div className='Home-box pt-3 w-full overflow-auto scrollbar-hide'>
          <section className='Banner-container w-full h-[17rem] px-2'>
            <Banner header='EXPLORING TECH' des='Your Source for Tech Insights'/>
          </section>
          <section className='h-[auto]'>2</section>
          <Footer/>
        </div>
      </main>
    </section>
  );
}

export default BlogPost