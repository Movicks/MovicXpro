// import React from 'react'
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';

function BlogPost() {
  return (
    <section className='h-[100vh] w-full flex Home overflow-auto scrollbar-hide '>
      <main className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl h-[100vh] shadow-lg flex-grow overflow-auto scrollbar-hide'>
        <div className='Home-box pt-3 w-full overflow-auto scrollbar-hide flex flex-col justify-between'>
          <section className='Banner-container w-full h-[17rem] px-2'>
            <Banner header='EXPLORING TECH' des='Your Source for Tech Insights'/>
          </section>
          <section className='h-[10rem] flex items-center justify-center py-3'>
            <div className='text-xl text-[#6371F6]'>No Contents Available</div>
          </section>
          <Footer/>
        </div>
      </main>
    </section>
  );
}

export default BlogPost