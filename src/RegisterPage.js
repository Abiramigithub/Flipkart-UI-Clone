import React, { useState } from 'react'
import './LoginPage.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase-config'

const RegisterPage = ({ handleClose }) => {
  const [registerEmail, setRegisterEmail] = useState()
  const [registerPassword, setRegisterPassword] = useState()

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
      alert('Registered Successfully')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    // <div>hello world</div>
    <div className='full'>
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
              style={{ color: 'black' }}
              onChange={(event) => {
                setRegisterEmail(event.target.value)
              }}
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
                setRegisterPassword(event.target.value)
              }}
            />
            <label className='label'>Enter Password</label>
            <div className='line'></div>
          </div>

          <p className='para'>
            By continuing, you agree to Flipkart's <a>Terms of Use </a>and
            <a> Privacy Policy</a>.
          </p>
          <button onClick={register} className='btn'>
            Create Account
          </button>

          <br />
          <button className='btn2' style={{ marginTop: '30px' }}>
            Existing User?Login
          </button>
        </div>
      </div>
      <div className='cross' onClick={handleClose}>
        {' '}
        &times;
      </div>
    </div>
  )
}

export default RegisterPage
