import React from 'react'

const Postcard = ({image,heading,description}) => {
  return (
    <section className='section-image'>
      <div >
    <div className='image-list'>
      <img className='assets-image' src={image} alt="" />
      <div>
      <h1 className='introduce-heading'>{heading}</h1>
      <p className="paragraph-container">{description}</p>
      
      </div>
    </div>
    </div>
    </section>
  )
}

export default Postcard