import React from 'react'
import '../Components/CSS/Projects.css'


function Projects(props) {
  return (
    <>
        <div className="projects">
            <img src={props.img} alt="project1" />
            <a href={props.link} target="new"><p>View on Github</p></a>
        </div>
    </>
  )
}

export default Projects