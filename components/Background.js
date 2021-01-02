import React from 'react';

const Background = () => {
  return (
    <div className='flex flex-wrap md:-mx-8'>
      <div className='w-full md:w-1/3 md:px-8'>
        <h5 className='font-bold text-primary text-base uppercase md:text-right mb-10 md:mb-0'>Background</h5>
      </div>
      <div className='w-full md:w-2/3 md:px-8 pl-6 md:pl-12'>
        <p className='text-base text-textLight font-light'>
        I'm currently an Engineer at Upstatement building things for the web with some awesome people. I recently graduated from Northeastern University after completing three awesome six-month co-ops at MullenLowe U.S., Starry, and Apple Music.
        <br/><br/>
        As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.
        <br/><br/>
        As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.
        </p>
      </div>
    </div>
  );
}

export default Background;