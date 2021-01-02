import React from 'react';

const experiences = [
  { company: 'Novelty Technology Pvt. Ltd.', position: 'Software Developer', duration: 'June 2020 - Present' },
  { company: 'FirstPaddle Pvt. Ltd.', position: 'Front-end Developer', duration: 'Sep 2019 - June 2020' },
  { company: 'Deerwalk Inc.', position: 'Intern', duration: 'Jan 2019 - Sep 2019' },
]

const Experience = () => {
  return (
    <div className='flex flex-wrap -mx-8'>
      <div className='w-full md:w-1/3 px-8'>
        <h5 className='font-bold text-primary text-base uppercase md:text-right mb-10 md:mb-0'>Experience</h5>
      </div>
      <div className='w-full md:w-2/3 px-8 pl-12'>
        {experiences && experiences.map((item, index) =>
          <div className={`flex justify-between ${index !== 0 && 'mt-6'}`} key={index}>
            <div>
              <h5 className='font-normal text-text text-base mb-1'>{item.company}</h5>
              <p className='font-normal text-text font-mono text-sm block md:hidden mt-1 mb-2'>{item.duration}</p>
              <p className='small-text'>{item.position}</p>
            </div>
            <p className='font-normal text-textLight font-mono text-sm hidden md:block'>{item.duration}</p>
          </div>
        )}
        {/* <h4 className='group font-bold text-base md:text-lg mt-12 md:mt-16 cursor-pointer hover:text-primary'>View My Resume
          <img src='/images/arrow-right.svg' alt='arrow-right' className='w-7 mb-1 ml-4 inline-block'/>
        </h4> */}
      </div>
    </div>
  );
}

export default Experience;