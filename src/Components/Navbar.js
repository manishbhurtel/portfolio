import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Components/CSS/Navbar.css'
import navImage from '../Images/BH.png'

function Navbar(props) {
    const [bars, setbars] = useState("hidden")
    const [cross, setcross] = useState("fa-bars")
    const burgerClicked = () => {
        if (bars === "hidden") {
            setbars("");
        }
        else {
            setbars("hidden");
        }
        if (cross === "fa-bars") {
            setcross("fa-times")
        }
        else {
            setcross("fa-bars")
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
                        <li><Link to="/" style={props.theme}><a>HOME</a></Link></li>
                        <li><Link to="/About" style={props.theme}><a>ABOUT</a></Link></li>
                        <li><Link to="/Services" style={props.theme}><a>SERVICES</a></Link></li>
                        <li><Link to="/Form" style={props.theme}><a>CONTACT ME</a></Link></li>
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

                <i className={`fa-solid ${cross}`} onClick={burgerClicked}></i>
            </div>


            <div className={`nav_container2 ${bars}`} style={props.theme}>
                <div className="contents2">
                    <ul>
                        <li><Link to="/" style={props.theme}><a>HOME</a></Link></li>
                        <li><Link to="/About" style={props.theme}><a>ABOUT</a></Link></li>
                        <li><Link to="/Services" style={props.theme}><a>SERVICES</a></Link></li>
                        <li><Link to="/Form" style={props.theme}><a>CONTACT ME</a></Link></li>
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