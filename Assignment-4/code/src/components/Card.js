import React from 'react'

export default function Card(props) {
    
    const {details}=props
    
  return (
    <div className='container'>
        <div className="subHeader">
            <div className='info'>
                <span>{details.name}</span>
                <span>{details.location}</span>
            </div>
            <div className="options">
                <img src="https://icon-library.com/images/three-dots-icon/three-dots-icon-9.jpg" alt="option" />
            </div>
        </div>
        <div className="main">
            <img src={details.PostImage} alt="" />
        </div>
        <div className="footer">
            <section className="likes">
                <span>
                    <img src="https://www.kindpng.com/picc/m/595-5957558_black-heart-symbol-transparent-heart-symbol-transparent-background.png" alt="like"/>
                    <img src="https://www.kindpng.com/picc/m/141-1412822_instagram-share-icon-png-png-download-transparent-png.png" alt="share" />
                </span>
                <span>
                    {details.date}
                </span>
            </section>
            <span>64 likes</span>
            <section>
                <b>{details.description}</b>
            </section>
                
        </div>
    </div>
  )
}
