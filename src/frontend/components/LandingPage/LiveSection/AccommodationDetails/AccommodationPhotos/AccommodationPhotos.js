import React, {useState} from 'react'

import './AccommodationPhotos.sass'

const AccommodationPhotos = ({photos}) => {
  const [activeImage, setActiveImage] = useState(0)

  const prevImage = () => {
    if(activeImage > 0) setActiveImage(activeImage - 1)
  }

  const nextImage = () => {
    if(activeImage < photos.length - 1) setActiveImage(activeImage + 1)
  }

  return (
    <div id='AccommodationPhotos'>
      <div className='images'>
        {photos.map((photo, index) => (
          <div
            key={photo.imgID}
            className={`image${activeImage === index ? ' open' : ''}`}
            style={{backgroundImage: `url(${photo.srcLink})`}}
          ></div>
        ))}
      </div>

      <div className='controls'>
        <div className='buttons'>
          <button onClick={prevImage}><span className='left'></span></button>
          <button onClick={nextImage}><span className='right'></span></button>
        </div>

        <ul></ul>
      </div>
    </div>
  )
}

export default AccommodationPhotos