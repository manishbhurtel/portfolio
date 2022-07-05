import React from 'react'
import bodyImage from '../Images/BH.png'
import '../Components/CSS/Body1.css'

function Body1() {
  return (
    <>
      <div className="body_container">
        
        <div className="btn_para">
          <div className="bodyPara">
            <strong><p className='p1'>I have Web Development Experience</p></strong>
            <p className='p2'>Hi I'm a Full Stack Web Developer and an android developer who serves beautiful web designs and full functionality of webPages.</p>
          </div>
          <div className="buttons">
            <button className='btn-1 btn'>Watch Videos</button>
            <button className='btn-2 btn'>Let's Talk</button>
          </div>
        </div>


        <img src={bodyImage} alt="manish" className='oops'/>
        </div>
      
    </>
  )
}

export default Body1