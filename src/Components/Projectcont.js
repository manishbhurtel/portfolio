import React from 'react'
import '../Components/CSS/Projects.css'
import pimg1 from '../Images/fb.png'
import pimg4 from '../Images/restro.png'
import pimg5 from '../Images/school.png'
import pimg6 from '../Images/cards.png'
import pimg7 from '../Images/gallery.png'
import pimg8 from '../Images/portfolio.png'
import Projects from './Projects'

function Projectcont(props) {
    return (
        <>
            <div className="whole" style={props.ptheme}>
                <div className="project_para">
                  <b> <p>Some of my projects</p></b> 
                </div>
                <div className="project_container">
                    <Projects img={pimg1} link="https://github.com/manishbhurtel/Facebook-login-page"/>
                    <Projects img={pimg4} link="https://github.com/manishbhurtel/Restraurant-Website"/>
                    <Projects img={pimg5} link="https://github.com/manishbhurtel/website"/>
                    <Projects img={pimg6} link="https://github.com/manishbhurtel/Cards"/>
                    <Projects img={pimg7} link="https://github.com/manishbhurtel/image_gallery"/>
                    <Projects img={pimg8} link="https://github.com/manishbhurtel/First-Portfolio-Website"/>
                </div>
                
            </div>
        </>
    )
}

export default Projectcont