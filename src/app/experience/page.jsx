import React from 'react'
import Styles from "./Experience.module.css";
function Experience() {
  return (
    <div className={Styles.container}>
      <div className={Styles.ex1}>

        <img src='https://www.cropin.com/hs-fs/hubfs/cropin_2021/cropin-logo.png' />

        <div className={Styles.listcontainer}>
          <ul>
            <li>Engineered a one-click data extraction solution from
              the company’s server architecture. This streamlined
              solution reduced the time spent waiting for data
              retrieval from 2 hours to 5 minutes.</li>
            <li>Performed statistical analysis on satellite data that
              helped in decision-making and strategic
              planning for crop identification.
              Worked with over 1.2 million spatial and
              more than 5 years of temporal data.</li>
            <li>Optimized Cropin’s crop identification pipeline
              by doubling the training data categories from 4 to 8.</li>
          </ul>
        </div>
      </div>
      <div className={Styles.ex1}>
        <img src='https://www.apac-insider.com/wp-content/uploads/2022/08/1661840505-a17cce63e0cb02b535fd88792fc4029a.png' />
        <div className={Styles.listcontainer}>
          <ul>
            <li>Developed a comprehensive client on-boarding and management interface.
              Implemented a platform facilitating the visualization of current clients
              and their contractual details.</li>
            <li>Tested API endpoints using Postman to ensure none of the real users
              experience errors. Wrote comprehensive SQL queries, to Integrate functionalities
              allowing for contract extension, termination, and modification of terms.</li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience