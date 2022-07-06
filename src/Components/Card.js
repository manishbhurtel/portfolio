import React from 'react'
import '../Components/CSS/Body2.css'
import '../Components/CSS/Card.css'

function Card(props) {
    return (
        <>


                <div className="card1">
                    <img src={props.img} alt="scare" className='social' />
                    <div className="desc">
                        <strong>{props.desc}</strong>
                    </div>
                </div>


        </>
    )
}

export default Card