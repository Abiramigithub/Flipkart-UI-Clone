import React from 'react'
import Header from './Header'
import Products from './Products'
import { Data } from './Data'
import Card from './Card'
import Banner from './Banner'
import MultiItem from './MultiItem'
import Footer from './Footer'
import Down from './Down'

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Banner />
      </div>
      <br />
      <div>
        <MultiItem />
      </div>
      <hr />
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Data.map((item) => (
            <Card
              image={item.image}
              name={item.name}
              rating={item.rating}
              actualPrice={item.actualPrice}
              offerPrice={item.offerPrice}
            />
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
      <hr
        style={{ background: '#332d2d', marginTop: '0', marginBottom: '0' }}
      />
      <div>
        <Down />
      </div>
    </div>
  )
}

export default App

// <>
//   <img
//     style={{ objectFit: 'contain' }}
//     width='100'
//     src={item.image}
//     alt='images'
//   />
// </>
