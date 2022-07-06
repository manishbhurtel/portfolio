import React from 'react'
import Body2 from './Body2'
import Card from './Card'
import '../Components/CSS/Body_Card.css'
import '../Components/CSS/Card.css'
import '../Components/CSS/Body2.css'
import image1 from '../Images/social-care.gif'
import image2 from '../Images/hacker.gif'
import image3 from '../Images/clock.gif'
import image4 from '../Images/id.gif'
import image5 from '../Images/award.gif'
import image6 from '../Images/note.gif'

function Bodycard(props) {
    return (
        <>
            <div className="textPara" style={props.b2theme}>
                <Body2 />
            </div>
            <div className="cards" style={props.b2theme}>
                <Card img={image1} desc="No data Loss" />
                <Card img={image2} desc="Hacking mastery" />
                <Card img={image3} desc="Fast project Delievery" />
                <Card img={image4} desc="Certified Front End Developer" />
                <Card img={image5} desc="Awarded from w3Schools" />
                <Card img={image6} desc="Clear Full Stack Development" />
            </div>
        </>
    )
}

export default Bodycard