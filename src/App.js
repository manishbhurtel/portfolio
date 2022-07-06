import React, { useState } from 'react'
import '../src/Components/CSS/All.css'
import Body1 from './Components/Body1'
import Navbar from './Components/Navbar'
import '../src/Components/CSS/Body2.css'
import Body_Card from './Components/Body_Card'


function App() {
  const [navTheme, setnavTheme] = useState({
    backgroundColor: 'white',
    color: 'rgb(30, 30, 30)'
  })
  const [bodyTheme, setbodyTheme] = useState({
    backgroundColor: 'white',
    color: 'rgb(30, 30, 30)'
  })
  const [body2Theme, setbody2Theme] = useState({
    backgroundColor: 'rgb(242, 242, 242)',
    color: 'rgb(40, 40, 40)'
  })
  const [textMode, settextMode] = useState("Dark Mode: ")
  const darktoggleClicked = () => {
    if (navTheme.color === 'rgb(30, 30, 30)') {
      setnavTheme({
        backgroundColor: 'rgb(30, 30, 30)',
        color: 'white'
      })
      setbodyTheme({
        backgroundColor: 'rgb(30, 30, 30)',
        color: 'white'
      })
      settextMode("Light Mode: ")
      setbody2Theme({
        backgroundColor: 'rgb(40, 40, 40)',
        color: 'white'
      })
    }
    else {
      setnavTheme({
        backgroundColor: 'white',
        color: 'rgb(30, 30, 30)'
      })
      setbodyTheme({
        backgroundColor: 'white',
        color: 'rgb(30, 30, 30)'
      })
      settextMode("Dark Mode: ")
      setbody2Theme({
        backgroundColor: 'rgb(242, 242, 242)',
        color: 'rgb(40, 40, 40)'
      })
    }
  }
  return (
    <>
      <Navbar theme={navTheme} toggleCLicked={darktoggleClicked} dlMode={textMode}/>
      <Body1 btheme={bodyTheme} />
      <Body_Card b2theme={body2Theme}/>
    </>
  )
}

export default App