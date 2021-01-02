import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-wrap xl:justify-between xl:items-center mb-10'>
        <p className='inline-block text-sm font-bold leading-6 text-center xl:text-left'>
          Developed by <br className='hidden xl:inline' />
          Ayush Bajracharya
          <img src='/images/ok-hand.svg' alt='ok-hand' className='w-5 h-5 inline-block mx-2' />
          2021
        </p>
        <div className='flex justify-center xl:justify-start mt-6 xl:mt-0'>
          <a href="mailto:realayush9@gmail.com" className='footer-links'>Email</a>
          <a href="mailto:realayush9@gmail.com" className='footer-links ml-12'>Instagram</a>
          <a href="mailto:realayush9@gmail.com" className='footer-links ml-12'>Github</a>
          <a href="mailto:realayush9@gmail.com" className='footer-links ml-12'>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;