import React, { useState } from 'react'
import '../Components/CSS/Navbar.css'
import navImage from '../Images/BH.png'

function Navbar(props) {
    const [bars, setbars] = useState("hidden")
    const burgerClicked = () => {
        if (bars === "hidden") {
            setbars("");
        }
        else {
            setbars("hidden");
        }
    }
    return (
        <>
            <div className="nav_container" style={props.theme}>
                <div className="profile">
                    <img src={navImage} alt="BH" />
                </div>

                <div className="contents">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>CONTACT ME</li>
                    </ul>
                </div>


                <div className="toggle">
                    <div className="para">
                        {props.dlMode}
                    </div>
                    <div className="toggleButton" onClick={props.toggleCLicked}>
                        <input type="checkbox" className='checkbox' />
                    </div>
                </div>

                <i className="fa-solid fa-bars" onClick={burgerClicked}></i>
            </div>


            <div className={`nav_container2 ${bars}`} style={props.theme}>
                <div className="contents2">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>CONTACT ME</li>
                    </ul>
                </div>


                <div className="toggle2">
                    <div className="para">
                        {props.dlMode}
                    </div>
                    <div className="toggleButton" onClick={props.toggleCLicked}>
                        <input type="checkbox" className='checkbox' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar