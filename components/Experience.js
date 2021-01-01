import React from 'react';

const experiences = [
  { company: 'Novelty Technology Pvt. Ltd.', position: 'Software Developer', duration: 'June 2020 - Present' },
  { company: 'FirstPaddle Pvt. Ltd.', position: 'Front-end Developer', duration: 'Sep 2019 - June 2020' },
  { company: 'Deerwalk Inc.', position: 'Intern', duration: 'Jan 2019 - Sep 2019' },
]

const Experience = () => {
  return (
    <div className='flex -mx-8'>
      <div className='w-1/3 px-8'>
        <h5 className='font-bold text-primary text-base uppercase text-right'>Experience</h5>
      </div>
      <div className='w-2/3 px-8 pl-12'>
        {experiences && experiences.map((item, index) =>
          <div className={`flex justify-between ${index !== 0 && 'mt-6'}`} key={index}>
            <div>
              <h5 className='font-normal text-text text-base mb-1'>{item.company}</h5>
              <p className='small-text'>{item.position}</p>
            </div>
            <p className='font-normal text-textLight font-mono text-sm '>{item.duration}</p>
          </div>
        )}
        <h4 className='font-bold text-lg mt-16'>View My Resume</h4>
      </div>
    </div>
  );
}

export default Experience;