import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Multidata } from './data1'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import './Banner.css'

let slidesToShow = 5
const PreviousBtn = (props) => {
  console.log(props)
  const { className, onClick, currentSlide } = props
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos
            style={{ color: 'blue', fontSize: '30px', zIndex: '4' }}
          />
        </div>
      )}
    </>
  )
}
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props
  console.log(props)
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos
            style={{ color: 'blue', fontSize: '30px', zIndex: '8' }}
          />
        </div>
      )}
    </>
  )
}

const MultiItem = () => {
  return (
    <div
    //  style={{ margin: '30px' }}
    >
      <Slider
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        slidesToShow={5}
        infinite={false}
        slidesToScroll={2}
      >
        {Multidata.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  )
}

const Card = ({ item }) => {
  return (
    <div className='' style={{ textAlign: 'center' }}>
      <img
        className='multi_image'
        src={item}
        alt=''
        style={{
          width: '100%',
          height: '170px',
          objectFit: 'contain',
          //   marginBottom: '10px',
        }}
      />
      <p style={{ fontSize: '14px', padding: '5px 0' }}>TOP TRENDING TV'S</p>
      <p style={{ fontSize: '16px', padding: '5px 0', color: 'green' }}>
        From ₹ 7,000
      </p>
      <p style={{ fontSize: '14px', padding: '5px 0', color: 'grey ' }}>
        Upto To ₹ Off on HDFC
      </p>
    </div>
  )
}

export default MultiItem
