import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='landing'>
        <section className='left'>
            <img src="https://cdn2.hubspot.net/hub/57580/file-17379914-jpg/images/science_assemblies-astronomy-resized-600.jpg" alt="blackhole_galaxy" />
        </section>
        <div className="right">
            <p>10x Team 04</p>
            <Link to="/Postview"><button className='btnLanding' type='submit'>Enter</button></Link>
        </div>
    </div>
  )
}
