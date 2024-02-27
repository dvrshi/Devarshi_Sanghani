import React from 'react'
import Style from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
const project_data = [
  {
    title: "Uber Clone",
    desc: `A working frontend Uber clone made using React Native, 
    Google Map APIs, Redux for memory and state management, TailwindCSS for
    styling. Used Expo to render it on Android device.`,
    src: "/uber.webp"
  },
  {
    title: "Huffman Encoder",
    desc: `Designed the front-end of the website,and implemented the Huffman Algorithm 
    for text compression and decompression of text files. Integrated the python back-end using flask.`,
    src: "/encode.png",
  },
  {
    title: "Blood Donation Website",
    desc: `Worked on back-end development of the website. Wrote functionalities for User Registration, 
    Sign-In, donating and requesting blood. Set up the database using MySQL.`,
    src: "/blood.jpg",
  },
  {
    title: "Car Parking Website",
    desc: `Used SpringBoot and Restful API for back-end development and Firebase for 
    data management to build a functional car parking website.`,
    src: "/parking.jpg",
  },
  {
    title: "Widget Dashboard",
    desc: `Used CSS Grid and Flexbox to design the front-end of the website. Added personalized
    react charts and widgets to the dashboard.`,
    src: "/widget.jpg",
  },
]
function Projects() {
  return (
    <div className={Style.container}>
      <div className={Style.r1}>
        {project_data.map((project, index) => (
          <ProjectCard key={index} title={project.title} desc={project.desc} src={project.src} />
        ))}

      </div>
    </div>
  )
}

export default Projects