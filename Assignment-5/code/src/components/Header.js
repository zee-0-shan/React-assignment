import React from 'react'
import { Link } from 'react-router-dom'
import camera from "./Images/camera.png"
export default function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <img src="https://global-uploads.webflow.com/5df9e0efb6c9ebd2e2710034/5e1edce0f33b5361b4b75eb3_NodeFlair%20Logo%20Horizontal.jpg" alt="app logo" />
        </div>
        <span className="icon">
            <img src={camera} alt="camera_icon" />
            <Link to="/"><button  className='btnHOME' type='submit'>home</button></Link>
        </span>
    </div>
  )
}
