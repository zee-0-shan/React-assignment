import React from 'react'

export default function CustomerInfo(props) {
  const {information}=props
  return (
    <div className='Customer_info'>
      <div className="appointed">
        <div>Appointment</div> <span>{information.appointment}</span>
      </div>
      <div className="email">
        <div>Email :</div><span>{information.email}</span>
      </div>
      <div className="phone">
        <div>Phone</div><span>{information.phone}</span>
      </div>
    </div>
  )
}
