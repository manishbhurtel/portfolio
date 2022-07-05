import React,{useState} from 'react'
import '../Components/CSS/Navbar.css'
import navImage from '../Images/BH.png'

function Navbar() {
    const [bars, setbars] = useState("hidden")
    const burgerClicked = ()=>{
        if(bars === "hidden"){
            setbars("");
        }
        else{
            setbars("hidden");
        }
    }
    return (
        <>
            <div className="nav_container">
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
                        Dark Mode:
                    </div>
                    <div className="toggleButton">
                        <input type="checkbox" className='checkbox' />
                    </div>
                </div>

                <i className="fa-solid fa-bars" onClick={burgerClicked}></i>
            </div>


            <div className={`nav_container2 ${bars}`}>
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
                        Dark Mode:
                    </div>
                    <div className="toggleButton">
                        <input type="checkbox" className='checkbox' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar