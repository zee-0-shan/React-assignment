import React from 'react'

export default function ProductList(props) {
    const {information}=props
    let toggel=">"
  return (
    
    <div className="checkbox">
        <input type="checkbox" className='check'/>
        
        <div className='productList'>
            <div className="picture"><img src={information.profile_pic} alt="Candidate's picture" /></div>
            <div className="description">
                <span>{information.candidate}</span>
                <span>Lorem ipsum dolor sit  adipisicing elit. Dolores eveniet quod illum sit velit ea.</span>
            </div>
            <div>{toggel}</div>
        </div>
    </div>
  )
}
