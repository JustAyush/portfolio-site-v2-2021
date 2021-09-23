import React from "react";

const projects = [
  {
    name: "List Info Business Solutions Dashboard",
    description: `Dashboard application for the back office operation of a holiday home booking business. It consists of 
      user, inventory management, employee ticket board, chat admin and other common back office operational features.`,
    link: "https://drive.google.com/drive/folders/1_UmDA_uFW6_r44FDOoOrBXaT6evbCIA2?usp=sharing",
    tools: ["React", "Chakra UI", "React Query", "React Hook Form"],
  },
  {
    name: "Vitafy Health Dashboard",
    description: `Vitafy is a US healthcare marketplace connecting patients to high value providers. Vitafy Dashboard is a web platform
      where one can search, learn and discover a local, direct primary care doctor comparing their prices.`,
    link: "https://drive.google.com/drive/folders/1F13jaK4wZuLGjTzen6gbhMBVV_crxh74?usp=sharing",
    tools: ["React", "MDBBootstrap", "React Hook Form"],
  },
  {
    name: "Vitafy Health Marketing Site",
    description:
      "Public site for Vitafy Health Platform showcasing and promoting the product in order to drive the sales.",
    link: "https://vitafyhealth.com/",
    tools: ["React", "Tailwind CSS"],
  },
  {
    name: "Goyal Group Site",
    description:
      "Official website for Goyal Group Foundation. I got this as a freelance work and collaborated with a designer for the project.",
    link: "http://goyalgroupnepal.com/",
    tools: ["JavaScript", "HTML", "CSS/Sass", "php"],
  },
  {
    name: "Membership Portal for the Holy City Med",
    description:
      "Holy City Med is a direct and primary care based on Charleston, SC, USA. The membership and check-in portal is my most recent work at my job in Novelty Technology.",
    link: "https://holycitymed-westashley.vitafyhealth.com/",
    tools: ["React", "Tailwindcss", "Node/Express", "MS SQL"],
  },
  {
    name: "Unity Support",
    description:
      "A platform built with the aim to provide information regarding the availability of blood group whenever and wherever required.",
    link: "https://unitysupport.org/",
    tools: ["React", "Material UI"],
  },
  {
    name: "Community Site for Education and Sports Development Group",
    description:
      "ESDG is a non-profit organization founded with an aim to educate children who lacks essentials tools for online classes. I volunteered to build a simple website for the organization.",
    link: "https://esdgroup.vercel.app/",
    tools: ["Next.js", "Tailwindcss"],
  },
  {
    name: "Who Crosses First",
    description:
      "My rendition of classic game 'Frogger', one-versus-one browser game.",
    link: "https://whocrossesfirst.herokuapp.com/",
    tools: ["JavaScript", "p5.js"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-wrap -mx-8">
      <div className="w-full md:w-1/3 px-8">
        <h5 className="font-bold text-primary text-base uppercase md:text-right mb-10 md:mb-0">
          Projects
        </h5>
      </div>
      <div className="w-full md:w-2/3 px-8 pl-12">
        {projects &&
          projects.map((item, index) => (
            <div key={index} className={`${index !== 0 && "mt-12"}`}>
              <a
                href={item.link}
                target="_blank"
                className="font-normal text-text text-base mb-3 hover:text-primary cursor-pointer"
              >
                {item.name}
                <img
                  src="/images/arrow-right.svg"
                  alt="arrow-right"
                  className="w-6 mb-1 ml-3 inline-block"
                />
              </a>
              <p className="small-text mb-5">{item.description}</p>
              {item.tools &&
                item.tools.map((tool, toolIndex) => (
                  <div
                    className="border border-primary rounded-sm px-2 py-1 inline-block mr-2 mb-2 md:mr-4"
                    key={toolIndex}
                  >
                    <p className="text-xs text-primary font-mono">{tool}</p>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
