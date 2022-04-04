import React from 'react'

export default function Header(props) {
    const {information}=props
    const toggle="<"
  return (
    <div className="navbar">
        <div className="toggleBtn">{toggle}</div>
        
            <div className="center_header">
                <p>{information.name}</p>
                <p>{information.id}</p>
            </div>
        
            <div className="btn"><button className='btn_header'>Print</button></div>
    </div>
        
  )
}
