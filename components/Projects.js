import React from 'react';

const projects = [
  {
    name: 'Project ABC',
    description: 'Small React project created during an interview process to browse and search surf videos via the YouTube API.',
    link: '',
    tools: ['Javascript', 'React', 'Redux', 'Node', 'Express']
  },
  {
    name: 'Project DEF',
    description: 'Small React project created during an interview process to browse and search surf videos via the YouTube API.',
    link: '',
    tools: ['Javascript', 'React', 'Redux', 'Node', 'Express']
  },
  {
    name: 'Project GHI',
    description: 'Small React project created during an interview process to browse and search surf videos via the YouTube API.',
    link: '',
    tools: ['Javascript', 'React', 'Redux', 'Node', 'Express']
  }
]

const Projects = () => {
  return (
    <div className='flex flex-wrap -mx-8'>
      <div className='w-full md:w-1/3 px-8'>
        <h5 className='font-bold text-primary text-base uppercase md:text-right mb-10 md:mb-0'>Projects</h5>
      </div>
      <div className='w-full md:w-2/3 px-8 pl-12'>
        {projects && projects.map((item, index) =>
          <div key={index} className={`${index !== 0 && 'mt-12'}`}>
            <h5 className='font-normal text-text text-base mb-3 hover:text-primary cursor-pointer'>
              {item.name}
              <img src='/images/arrow-right.svg' alt='arrow-right' className='w-6 mb-1 ml-3 inline-block' />
            </h5>
            <p className='small-text mb-5'>{item.description}</p>
            {item.tools && item.tools.map((tool, toolIndex) =>
              <div className='border border-primary rounded-sm px-2 py-1 inline-block mr-2 mb-2 md:mr-4' key={toolIndex}>
                <p className='text-xs text-primary font-mono'>{tool}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;