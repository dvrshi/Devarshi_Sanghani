import React from 'react'
import style from './skills.module.css'
const lang = [
  {
    name: 'JavaScript',
    img_src: 'https://cdn-icons-png.flaticon.com/512/136/136530.png'
  },
  {
    name: 'Python',
    img_src: 'https://cdn-icons-png.flaticon.com/256/2570/2570575.png'
  },
  {
    name: 'C++',
    img_src: 'https://cdn-icons-png.flaticon.com/512/2305/2305849.png'
  },
  {
    name: 'Java',
    img_src: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
  },
  {
    name: 'HTML',
    img_src: 'https://cdn-icons-png.flaticon.com/512/2535/2535518.png'
  },
  {
    name: 'CSS',
    img_src: 'https://cdn-icons-png.flaticon.com/512/2535/2535494.png'
  }
]
const framework = [
  {
    name: 'React',
    img_src: 'https://cdn-icons-png.flaticon.com/512/919/919851.png'
  },
  {
    name: 'Node.js',
    img_src: 'https://cdn-icons-png.flaticon.com/512/919/919825.png'
  },
  {
    name: 'SQL',
    img_src: 'https://cdn-icons-png.flaticon.com/512/2305/2305934.png'
  },
  {
    name: 'NextJS',
    img_src: "/next.png"
  },
]
function Skills() {
  return (
    <div className={style.container}>
      <h1>My Skills</h1>
      <div className={style.lang_container}>
        {lang.map((lang, index) => (
          <div key={index} className={style.lang_item}>
            <h3 className={style.lang_name}>{lang.name}</h3>
            <img className={style.lang_logo} src={lang.img_src} alt={lang.name} />
          </div>
        ))}
      </div>
      <h1>Frameworks</h1>
      <div className={style.lang_container}>
        {framework.map((lang, index) => (
          <div key={index} className={style.lang_item}>
            <h3 className={style.lang_name}>{lang.name}</h3>
            <img className={style.lang_logo} src={lang.img_src} alt={lang.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills