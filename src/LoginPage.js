import React, { useState } from 'react'
import { auth } from './firebase-config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const LoginPage = ({ handleClose, setLoginPage }) => {
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
      alert('Login Successfully')
    } catch (err) {
      console.log(err.message)
    }
  }

  // const [open, setOpen] = React.useState(false)
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setOpen(false)

  return (
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
            By continuing, you agree to Flipkart's <a>Terms of Use </a>and
            <a> Privacy Policy</a>.
          </p>
          <button className='btn' onClick={login}>
            Login
          </button>
          <p className='or'>OR</p>
          <button className='btn2'>Request OTP</button>

          <p className='link_bottom'>
            New to Flipkart?
            <p
              style={{ cursor: 'pointer' }}
              onClick={() => setLoginPage(false)}
            >
              {' '}
              Create an account
            </p>
          </p>
          {/* <p style={{ cursor: 'pointer' }} onClick={() => setLoginPage(false)}>
            {' '}
            Create an account
          </p> */}
        </div>
      </div>
      <div className='cross' onClick={handleClose}>
        {' '}
        &times;
      </div>
    </div>
  )
}

export default LoginPage

// import React from 'react'
// import './LoginPage.css'

// const LoginPage = () => {
//   return (
//     <div className='right'>
//       <div className='input-group'>
//         <input
//           className='input'
//           type='text'
//           placeholder=''
//           style={{ color: 'black' }}
//         />
//         <label className='label'>Enter Mobile number</label>
//         <div className='line'></div>
//       </div>
//       {/* <div className='input-group'>
//         <input className='input' type='password' placeholder='' />
//         <label className='label'>Enter Password</label>
//         <div className='line'></div>
//         <a href='' className='link'>
//           Forget?
//         </a>
//       </div> */}
//       <p className='para'>
//         By continuing, you agree to Flipkart's <a>Terms of Use </a>and
//         <a> Privacy Policy</a>.
//       </p>
//       <button className='btn'>Continue</button>
//       {/* <p className='or'>OR</p> */}
//       <button className='btn2'>Existing User?Login</button>

//       {/* <p className='link_bottom'>New to Flipkart? Create an account</p> */}
//     </div>
//   )
// }

// export default LoginPage

// // import {
// //   Box,
// //   Button,
// //   Dialog,
// //   TextField,
// //   Typography,
// //   styled,
// // } from '@material-ui/core'
// // import Modal from '@mui/material/Modal'

// // import React from 'react'

// // // const Component = styled(Box)(() => {
// // //   width: '70%'
// // // })

// // const style = {
// //   position: 'absolute',
// //   top: '50%',
// //   left: '48%',
// //   tabindex: '-5',
// //   transform: 'translate(-50%, -50%)',
// //   width: 600,
// //   height: 475,
// //   bgcolor: 'background.paper',
// //   borderRadius: 2,
// //   boxShadow: 24,
// //   p: 4,
// //   flexDirection: 'row',
// // }

// // const LoginPage = ({ open, setOpen }) => {
// //   const handleClose = () => {
// //     setOpen(false)
// //   }
// //   return (
// //     <Modal open={open} onClose={handleClose}>
// //       {/* <Box sx={style}>
// //         <Box>
// //           <h1>Login</h1>
// //           <Typography>
// //             Get access to your Orders, Wishlist and Recommendations
// //           </Typography>
// //         </Box>
// //         <Box>
// //           <TextField variant='standard' label='Enter Email/Mobile Number' />
// //           <TextField variant='standard' label='Enter Password' />
// //           <Typography>
// //             By continuing, you agree to Flipkart's Terms of Use and Privacy
// //             Policy.
// //           </Typography>
// //           <Button>Login</Button>
// //           <Typography>OR</Typography>
// //           <Button>Request OTP</Button>
// //           <Typography>New to Flipkart? Create an account</Typography>
// //         </Box>
// //       </Box> */}
// //       <Box
// //         sx={{
// //           color: 'red',
// //           fontSize: '50px',
// //           fontWeight: '600',
// //           bgcolor: 'red',
// //         }}
// //       >
// //         hello world
// //       </Box>
// //     </Modal>
// //   )
// // }

// // export default LoginPage

// // // import React from 'react'
// // // import './LoginPage'
// // // import './LoginPage.css'
// // // import { Dialog } from '@material-ui/core'

// // // const LoginPage = ({ closeModal }) => {
// // //   return (
// // //     <div className='full'>
// // //       <div className='container'>
// // //         <div className='left'>
// // //           <div>
// // //             <h1 className='heading'>Login</h1>
// // //             <p className='heading_disc'>
// // //               Get access to your Orders,Wishlist and Recomendations
// // //             </p>
// // //           </div>
// // //           <div>
// // //             <img
// // //               style={{ marginTop: '145px', marginLeft: '30px' }}
// // //               src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png'
// // //               alt=''
// // //             />
// // //           </div>
// // //         </div>
// // //         <hr />
// // //         <div className='right'>
// // //           <div className='input-group'>
// // //             <input
// // //               className='input'
// // //               type='text'
// // //               placeholder=''
// // //               style={{ color: 'white' }}
// // //             />
// // //             <label className='label'>Enter Email/Mobile number</label>
// // //             <div className='line'></div>
// // //           </div>
// // //           <div className='input-group'>
// // //             <input className='input' type='password' placeholder='' />
// // //             <label className='label'>Enter Password</label>
// // //             <div className='line'></div>
// // //             <a href='' className='link'>
// // //               Forget?
// // //             </a>
// // //           </div>
// // //           <p className='para'>
// // //             By continuing, you agree to Flipkart's <a>Terms of Use </a>and
// // //             <a> Privacy Policy</a>.
// // //           </p>
// // //           <button className='btn'>Login</button>
// // //           <p className='or'>OR</p>
// // //           <button className='btn2'>Request OTP</button>

// // //           <p className='link_bottom'>New to Flipkart? Create an account</p>
// // //         </div>
// // //       </div>
// // //       <div className='cross' onClick={() => closeModal(false)}>
// // //         {' '}
// // //         &times;
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default LoginPage
