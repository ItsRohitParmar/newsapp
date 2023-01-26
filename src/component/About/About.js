import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='aboutus'>
      <div>
        <h4>How QuickNews Works?</h4>
        <p>QuickNews is created using React JS. It is completely dynamic and displays real time news using NEWS API, however to make this project live I have used a dummy json file due to NEWS API paid hosting policy. To see it's actual real version contact me</p> 
        <p>It was an amzing experiece and so much learnings to build this project.</p>
        <p>Please do check-out below my other projects as well.</p>
         
      </div>
      <div>
      <div className='projects'>
        <h5>MERN Stack Project - Notebook</h5> <a target={"blank"} href="https://yournotesbook.netlify.app/"><button>View</button></a>
      </div>

      <div className='projects'>
        <h5>React JS Project - MI Store Clone</h5> <a target={"blank"} href="https://miclonebyrohit.netlify.app/"><button>View</button></a>
      </div>

      <div className='projects'>
        <h5>React JS Project - TextEditor</h5> <a target={"blank"} href="https://rohitstexteditor.netlify.app/"><button>View</button></a>
      </div>
      </div>
    </div>
  )
}

export default About