import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCsv-Vhor7rRxOIiBLx9VFKVV3EFycL744',

  authDomain: 'flipkartclone-7c11f.firebaseapp.com',

  projectId: 'flipkartclone-7c11f',

  storageBucket: 'flipkartclone-7c11f.appspot.com',

  messagingSenderId: '290772073094',

  appId: '1:290772073094:web:6b7aedbc071d65185b6f07',

  measurementId: 'G-6NDX9N0MZL',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
