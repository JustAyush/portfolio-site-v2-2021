import React from 'react';

const Intro = () => {
  return ( 
    <div className='py-36'>
      <h1 className='text-4.5xl font-light inline-block'>Hello !</h1>
      <img src="/images/waving-hand.svg" alt="waving-hand" className='w-10 h-10 inline-block mb-5 ml-5' />
      <h2 className='mt-12 text-4.5xl leading-relaxed font-light pr-96'>I'm <strong>Ayush Bajracharya</strong>, a design-minded software developer focused on building beautiful interfaces & experiences.</h2>
      <h5 className='font-normal mt-20 text-xl inline-block'>Get in touch 
      <img src="/images/pointing-right.svg" alt="pointing-right" className='w-8 h-8 inline-block mb-1 ml-4 mr-3' />
        <a 
          href="mailto:realayush99@gmail.com"
          className='no-underline outline-none border-b-2 border-primary hover:text-primary'
        >
          realayush99@gmail.com
        </a>
      </h5>
    </div>
   );
}
 
export default Intro;