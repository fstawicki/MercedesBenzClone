import React from 'react'

const ImageHeadline = (props) => {
  return (
    <div className='ImageHeadline'>
        <div className='ImageHeadline__imagediv'>
            {/* <img src="../images/mercedesphotos/headlines/headline_a_class_design.jpg" alt="mercedes a class photo" /> */}
        </div>
        <div className='ImageHeadline__text'>
            <p className='ImageHeadline__text__paragraph'>{props.paragraph}</p>
            <h2 className='ImageHeadline__text__title'>{props.title}</h2>
        </div>
        <div className='ImageHeadline__arrow'>
            a
        </div>
    </div>
  )
}

export default ImageHeadline