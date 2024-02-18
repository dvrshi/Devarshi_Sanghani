import React from 'react';
import Style from "./ProjectCard.module.css";
import Image from 'next/image';


function ProjectCard({title, desc,src}) {
  return (
    <div className={Style.card}>
      <div className={Style.image}>
        <Image
          src={src}
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </div>
      <div className={Style.content}>
        <h1 className={Style.h1}>{title}</h1>
        <p className={Style.data}>{desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
