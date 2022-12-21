import React from 'react'
import './Footer.css'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import HelpIcon from '@mui/icons-material/Help'
import StarsIcon from '@mui/icons-material/Stars'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
const Footer = () => {
  return (
    <div className='container'>
      <div className='up'>
        <div className='about'>
          <div style={{ padding: '10px 20px', color: 'dimgray' }}>ABOUT</div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Contact Us
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            About Us
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Careers
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Flipkart Stories
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Press
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Flipkart Wholesale
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            CorporateInformation
          </div>
        </div>
        <div className='help'>
          <div style={{ padding: '10px 20px', color: 'dimgray' }}>HELP</div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Payments
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Shipping
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Cancellation & Returns
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            FAQ
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Report Infringement
          </div>
        </div>
        <div className='policy'>
          <div style={{ padding: '10px 20px', color: 'dimgray' }}>POLICY</div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Return Policy
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Term Of Use
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Security
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Privacy{' '}
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Sitemap
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            EPR Complaince
          </div>
        </div>
        <div className='social'>
          <div style={{ padding: '10px 20px', color: 'dimgray' }}>SOCIAL</div>
          <div className='text' style={{ padding: '5px 10px' }}>
            {' '}
            Facebook
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            Twitter
          </div>
          <div className='text' style={{ padding: '5px 10px' }}>
            You Tube{' '}
          </div>
        </div>
        <hr />
        <div className='mail'>
          <div style={{ padding: '10px 20px', color: 'dimgray' }}>Mail Us</div>
          <div>Flipkart Internet Private Limited,</div>
          <div>Building Alyssa,Begonia &</div>
          <div>Clove Embassy Tech Village</div>
          <div>Outer Ring Road, Devarabeesanahalli Village,</div>
          <div>Bengaluru,560103</div>
          <div>Karnataka,India</div>
        </div>
        <div className='register'>
          <div style={{ padding: '10px 20px', color: 'dimgray' }}>
            Registered Office Address
          </div>
          <div>Building Alyssa,Begonia & </div>
          <div>Clove Embassy Tech Village</div>
          <div>Outer Ring Road, Devarabeesanahalli Village, </div>
          <div>Bengaluru,560103</div>
          <div> Facebook</div>
          <div>Karnataka,India</div>
          <div>CIN:U51109KA2012PTC066107</div>
          <div>Telephone:044-45614700 </div>
        </div>
      </div>
      <hr style={{ color: 'white' }} />
    </div>
  )
}

export default Footer
