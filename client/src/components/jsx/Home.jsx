import React from 'react'
import '../styles/Home.css'
import Hero from './Hero'
import About from './About'
import ContactUs from './Contact'
import MajorEvents from './MajorEvents'
import Executives from './Executives'

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className='vertical-gap'>
        <About />
      </div>
      <div className="devicer"></div>
      <div className='vertical-gap' id="Events">
        <MajorEvents />
      </div>
      <div className="devicer"></div>
      <div className='vertical-gap'>
        <Executives />
      </div>
      <div className="devicer"></div>
      <div>
        <ContactUs />
      </div>
    </>
  )
}

export default Home