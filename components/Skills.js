import React from 'react';

const Skills = () => {
  return (
    <div className='flex flex-wrap -mx-8'>
      <div className='w-full md:w-1/3 px-8'>
        <h5 className='font-bold text-primary text-base uppercase md:text-right mb-10 md:mb-0'>Skills</h5>
      </div>
      <div className='w-full md:w-2/3 px-8 pl-12'>
        <div className='flex flex-wrap -mx-5'>
          <div className='w-1/2 lg:w-1/4 px-5 mb-4 lg:mb-0'>
            <h5 className='font-normal text-text text-base uppercase mb-3'>Languages</h5>
            <p className='small-text'>JavaScript (ES6)</p>
            <p className='small-text'>HTML</p>
            <p className='small-text'>CSS/Sass</p>
            <p className='small-text'>SQL</p>
          </div>
          <div className='w-1/2 lg:w-1/4 px-5 mb-4 lg:mb-0'>
            <h5 className='font-normal text-text text-base uppercase mb-3'>Frameworks</h5>
            <p className='small-text'>React & Redux</p>
            <p className='small-text'>Next JS</p>
            <p className='small-text'>Node & Express</p>
            <p className='small-text'>Material UI, Bootstrap, Tailwindcss</p>
          </div>
          <div className='w-1/2 lg:w-1/4 px-5'>
            <h5 className='font-normal text-text text-base uppercase mb-3'>Tools</h5>
            <p className='small-text'>Git & Github</p>
            <p className='small-text'>Postman</p>
            <p className='small-text'>DevTools</p>
          </div>
          <div className='w-1/2 lg:w-1/4 px-5'>
            <h5 className='font-normal text-text text-base uppercase mb-3'>Design</h5>
            <p className='small-text'>Adobe XD</p>
            <p className='small-text'>Figma</p>
            <p className='small-text'>Adobe Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;