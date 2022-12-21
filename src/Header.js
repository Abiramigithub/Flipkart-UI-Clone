import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import './Header.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import MoreT from './MoreT'
import LoginT from './LoginT'
import 'tippy.js/themes/light.css'
// import Modal from ''
import LoginPage from './LoginPage.js'
import plus from './images/plus.png'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import './LoginPage.css'
import { auth } from './firebase-config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import RegisterPage from './RegisterPage.js'

const style = {
  position: 'absolute',
  top: '50%',
  left: '48%',
  color: 'blue',
  transform: 'translate(-50%, -50%)',
  width: 400,

  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
}
// const style2 = {
//   backgroundColor: '#2874f0',
//   width: 300,
//   height: 500,
//   mt: '0',
//   mx: '0',
// }
// const style3 = {
//   mt: '0',
//   mx: '300',
// }

const Header = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  console.log('loginEmail', loginEmail)
  console.log('loginPassword', loginPassword)
  console.log('auth', auth)

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user)
    } catch (err) {
      console.log(err.message)
    }
  }
  const [loginPage, setLoginPage] = React.useState(true)

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  console.log(loginPage)
  console.log(!loginPage)

  return (
    <div className='header'>
      <div className='header__first'>
        <span
          style={{
            color: 'white',
            fontStyle: 'italic',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          <b>Flipkart</b>
        </span>
        <div className='header__first1'>
          <span
            style={{
              fontSize: '11px',
              color: 'white',
              fontStyle: 'italic',
              cursor: 'pointer',
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: '#f9e107',
              fontSize: '11px',
              fontStyle: 'italic',
              cursor: 'pointer',
            }}
          >
            Plus
          </span>
          <span>
            <img width='10px' height='10px' src={plus} alt='Plus' />
          </span>
        </div>
      </div>
      <div className='header__second'>
        <input placeholder='Search for products' type='text' />
        <SearchIcon />
      </div>
      <div className='header__third'>
        <Tippy theme='light' content={<LoginT />} interactive={true}>
          <div>
            <button className='btn3' onClick={handleOpen}>
              Login
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              {/* {loginPage ? <div>LoginPage</div> : <div>RegisterPage</div>} */}
              {/* {!loginPage && <div>RegisterPage</div>} */}
              {/* <button onClick={() => setLoginPage(true)}>ShowLoginPage</button>
              <button onClick={() => setLoginPage(false)}>
                ShowRegisterPage
              </button> */}

              {/* {loginPage && (
                <LoginPage
                  handleClose={handleClose}
                  setLoginPage={setLoginPage}
                />
              )} */}
              {/* {!loginPage && (
                <RegisterPage
                  handleClose={handleClose}
                  setLoginPage={setLoginPage}
                />
              )} */}
              <LoginPage handleClose={handleClose} />

              {/* <Box sx={style}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  Text in a modal
                </Typography>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box> */}
              {/* <div className='full'>
                <div className='container2'>
                  <div className='left'>
                    <div>
                      <h1 className='heading'>Login</h1>
                      <p className='heading_disc'>
                        Get access to your Orders,Wishlist and Recomendations
                      </p>
                    </div>
                    <div>
                      <img
                        style={{ marginTop: '145px', marginLeft: '30px' }}
                        src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <hr />
                  <div className='right'>
                    <div className='input-group'>
                      <input
                        className='input'
                        type='text'
                        placeholder=''
                        onChange={(event) => {
                          setLoginEmail(event.target.value)
                        }}
                        style={{ color: 'black' }}
                      />
                      <label className='label'>Enter Email/Mobile number</label>
                      <div className='line'></div>
                    </div>
                    <div className='input-group'>
                      <input
                        className='input'
                        type='password'
                        placeholder=''
                        onChange={(event) => {
                          setLoginPassword(event.target.value)
                        }}
                      />
                      <label className='label'>Enter Password</label>
                      <div className='line'></div>
                      <a href='' className='link'>
                        Forget?
                      </a>
                    </div>
                    <p className='para'>
                      By continuing, you agree to Flipkart's{' '}
                      <a>Terms of Use </a>and
                      <a> Privacy Policy</a>.
                    </p>
                    <button className='btn' onClick={login}>
                      Login
                    </button>
                    <p className='or'>OR</p>
                    <button className='btn2'>Request OTP</button>

                    <p className='link_bottom'>
                      New to Flipkart? Create an account
                    </p>
                  </div>
                </div>
                <div className='cross' onClick={handleClose}>
                  {' '}
                  &times;
                </div>
              </div> */}
            </Modal>
            {/* <LoginPage open={open} setOpen={setOpen} /> */}
            {/* <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <Box>
                  <Typography
                    id='modal-modal-title'
                    variant='h6'
                    component='h2'
                  >
                    Login
                  </Typography>
                </Box>
                <Box>
                  <Typography id='modal-modal-description'>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Box>
            </Modal> */}
          </div>
        </Tippy>
      </div>
      <div className='header__fourth'>Become a Seller</div>
      <div className='header__fifth'>
        <Tippy theme='light' content={<MoreT />} interactive={true}>
          <p>More</p>
        </Tippy>

        <ExpandMoreIcon />
      </div>
      <div className='header__sixth'>
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  )
}

export default Header
