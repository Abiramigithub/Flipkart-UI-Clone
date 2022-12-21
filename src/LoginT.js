import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
import StoreIcon from '@material-ui/icons/Store'
import './LoginT.css'
import plus from './images/plus.png'
import Modal from '@mui/material/Modal'
import RegisterPage from './RegisterPage'

const LoginT = () => {
  const [open, setOpen] = React.useState()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='logint'>
      <div className='logint__i'>
        <h2>New Customer?</h2>

        <button
          style={{
            color: 'blue',
            border: 'none',
            padding: '10px',
            fontWeight: '400',
          }}
          onClick={handleOpen}
        >
          Signup
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          {/* <div>hello</div> */}
          <RegisterPage handleClose={handleClose} />
        </Modal>
      </div>
      <hr />

      <div className='logint__in'>
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>
      <hr />

      <div className='logint__in'>
        <img
          src={plus}
          alt=''
          style={{ width: '20px', height: '20px', padding: '7px' }}
        />
        <p>Flipkart Plus</p>
      </div>
      <hr />
      <div className='logint__in'>
        <StoreIcon />
        <p>Orders</p>
      </div>
      <hr />
      <div className='logint__in'>
        <FavoriteIcon />
        <p>Wishlist</p>
      </div>
      <hr />
      <div className='logint__in'>
        <ConfirmationNumberIcon />
        <p>Rewards</p>
      </div>
      <hr />
      <div className='logint__in'>
        <CardGiftcardIcon />
        <p>Gift Cards</p>
      </div>
    </div>
  )
}

export default LoginT
