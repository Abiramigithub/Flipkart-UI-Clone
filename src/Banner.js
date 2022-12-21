import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from './images/carouselImage1.jpg'
import image2 from './images/carouselImage2.jpg'
import image3 from './images/carouselImage3.jpg'
import image4 from './images/carouselImage4.jpg'
import image5 from './images/carouselImage5.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <div style={{ margin: '30px' }}>
      <Slider autoplay autoplaySpeed={2000}>
        <div>
          <img src={image1} alt='' style={{ width: '100%', height: '50vh' }} />
        </div>
        <div>
          <img src={image2} alt='' style={{ width: '100%', height: '50vh' }} />
        </div>
        <div>
          <img src={image3} alt='' style={{ width: '100%', height: '50vh' }} />
        </div>
        <div>
          <img src={image4} alt='' style={{ width: '100%', height: '50vh' }} />
        </div>
        <div>
          <img src={image5} alt='' style={{ width: '100%', height: '50vh' }} />
        </div>
      </Slider>
    </div>
  )
}

export default Banner
