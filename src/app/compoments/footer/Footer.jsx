import React from 'react'
import style from './/footer.module.css'
function Footer() {
  return (
    <div className={style.container}>
      <div style={{width:'40%', borderTop:'solid 0.25px white', marginTop:"10px"  }}></div>
      <div className={style.name}>2024 Devarshi Sanghani </div> 
        <img className={style.img} src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png'/>
      
      <div style={{width:'40%', borderTop:'solid 0.25px white', marginTop:"10px"  }}></div>
    </div>
  )
}

export default Footer