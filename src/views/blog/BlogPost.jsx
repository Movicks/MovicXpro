import React from 'react'

function BlogPost() {
  return (
    <section className='h-[100vh] w-full flex Home overflow-auto scrollbar-hide '>
      <div className='Dashboard-resDiv w-[23.5rem] bg-gray-300 overflow-auto scrollbar-hide'></div>
      <section className='glass-effect-3 bg-white bg-opacity-50 backdrop-blur-xl shadow-lg flex-grow overflow-auto scrollbar-hide'>
        <div className='Home-box pt-3 w-full overflow-auto scrollbar-hide'>
          <section className='bg-white w-full h-[30rem] overflow-auto scrollbar-hide'>
            <div>Blog 1</div>
          </section>
          <section>2</section>
        </div>
      </section>
    </section>
  );
}

export default BlogPost