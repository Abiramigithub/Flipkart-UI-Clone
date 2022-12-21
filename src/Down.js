import React from 'react'
import './Footer.css'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import HelpIcon from '@mui/icons-material/Help'
import StarsIcon from '@mui/icons-material/Stars'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

const Down = () => {
  return (
    <div
      style={{
        background: ' #332d2d',
        padding: '20px 0px',
        justifyContent: 'space-evenly',
      }}
    >
      <div className='down'>
        <div className='shop'>
          <div style={{ color: 'yellow' }}>
            <ShoppingBagIcon />
          </div>
          <div>Become a Seller</div>
        </div>
        <div className='star'>
          <div style={{ color: 'yellow' }}>
            <StarsIcon />
          </div>
          <div>Advertise</div>
        </div>
        <div className='gift'>
          <div style={{ color: 'yellow' }}>
            <CardGiftcardIcon />
          </div>
          <div>Gift Cards</div>
        </div>
        <div className='center'>
          <div style={{ color: 'yellow' }}>
            <HelpIcon />
          </div>
          <div>Help Center</div>
        </div>
        <div>© 2007-2022 Flipkart.com</div>
        <div>
          <img
            src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Down
