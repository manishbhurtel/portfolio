import React from 'react'
import bodyImage from '../Images/BH1.jpg'
import '../Components/CSS/Body1.css'
import { Link } from 'react-router-dom'

function Body1(props) {
  return (
    <>
      <div className="body_container" style={props.btheme}>

        <div className="btn_para">
          <div className="bodyPara">
            <strong><p className='p1'>I have Web Development Experience</p></strong>
            <p className='p2'>Hi Welcome to my Portfolio Webpage. My name is Namrata Bhurtel and I am from Pokhara, Nepal. I have created this webpage using react js</p>
          </div>
          <div className="buttons">
            <a href='https://www.youtube.com/channel/UCE7O2ejHvbJ82Ul3r9eWd-A' target="new"> <button className='btn-1 btn'>Watch Videos</button></a>
            <Link to="/Form"><button className='btn-2 btn'>Let's Talk</button></Link>
          </div>
        </div>
        <img src={bodyImage} alt="manish" className='oops' />

      </div>

    </>
  )
}

export default Body1