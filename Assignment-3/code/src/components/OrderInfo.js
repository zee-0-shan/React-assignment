import React from 'react'

export default function OrderInfo(props) {
    const {information}=props
    let time=new Date();
    let currTime=`${time.getHours()}:${time.getMinutes()} `
    let currDate=`(${time.getDate()}-${time.getMonth()+1}-${time.getFullYear()})`
  return (
    <div className="OrderInfo">
    <div className="status">
        <div>Status</div> <span>{information.status}</span>
      </div>
      <div className="door">
        <div>Door</div><span>{information.door}</span>
      </div>
      <div className="time">
        <div>Time</div><span>{currTime}</span><span>{currDate}</span>
      </div>
    </div>
  )
}
