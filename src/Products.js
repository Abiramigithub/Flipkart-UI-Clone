import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Products.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/dist/tippy.css'
import Tippy from '@tippyjs/react'
import Home from './Home'
import mbl from './images/mbl.jpeg'
import Top from './images/Top.jpeg'
import Toy from './images/Toy.jpeg'
import Travel from './images/Travel.jpeg'
import wheel from './images/wheel.jpeg'
import homet from './images/homet.jpeg'
import Electronic from './images/Electronic.jpeg'
import Grocery from './images/Grocery.jpeg'
import Appliance from './images/Appliance.jpeg'
import fashiont from './images/fashiont.jpeg'
import Fashion from './Fashion'

const Products = () => {
  return (
    <div className='products'>
      <div className='product__1'>
        <div>
          <img src={Grocery} alt='' style={{ width: '70px', height: '50px' }} />
        </div>
        <div>Grocery</div>
      </div>
      <div className='product__2'>
        <div>
          <img src={mbl} alt='' style={{ width: '70px', height: '50px' }} />
        </div>
        <div>Mobiles</div>
      </div>
      <div className='product__3'>
        <div>
          <img
            src={fashiont}
            alt=''
            style={{ width: '70px', height: '50px' }}
          />
        </div>
        <div className='sub1'>
          <Tippy theme='light' interactive={true} content={<Fashion />}>
            <div>Fashion</div>
          </Tippy>
          <ExpandMoreIcon />
        </div>
      </div>
      <div className='product__4'>
        <div>
          <img
            src={Electronic}
            alt=''
            style={{ width: '70px', height: '50px' }}
          />
        </div>
        <div className='sub2'>
          <div>Electronics</div>
          {/* <ExpandMoreIcon /> */}
        </div>
      </div>
      <div className='product__5'>
        <div>
          <img src={homet} alt='' style={{ width: '70px', height: '50px' }} />
        </div>
        <div className='sub3'>
          <Tippy theme='light' interactive={true} content={<Home />}>
            <div>Home</div>
          </Tippy>
          <ExpandMoreIcon />
        </div>
      </div>
      <div className='product__6'>
        <div>
          <img
            src={Appliance}
            alt=''
            style={{ width: '70px', height: '50px' }}
          />
        </div>
        <div>Appliances</div>
      </div>
      <div className='product__7'>
        <div>
          <img src={Travel} alt='' style={{ width: '70px', height: '50px' }} />
        </div>
        <div>Travel</div>
      </div>
      <div className='product__8'>
        <div>
          <img src={Top} alt='' style={{ width: '70px', height: '50px' }} />
        </div>
        <div>Top offers</div>
      </div>
      <div className='product__9'>
        <div>
          <img src={Toy} alt='' style={{ width: '70px', height: '50px' }} />
        </div>
        <div className='sub4'>
          <div>Beauty,Toys & More</div>
          {/* <ExpandMoreIcon /> */}
        </div>
      </div>
      <div className='product__10'>
        <div>
          <img src={wheel} alt='' style={{ width: '70px', height: '50px' }} />
        </div>
        <div className='sub5'>
          <div>Two Wheelers</div>
          {/* <ExpandMoreIcon /> */}
        </div>
      </div>
    </div>
  )
}

export default Products
