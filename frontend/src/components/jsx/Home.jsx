import React from 'react'
import '../styles/Home.css'
import Hero from './Hero'
import About from './About'
import Events from './Events'
import Members from './Members'
import ContactUs from './Contact'

const Home = () => {
  return (
    <>
      <div className='to-centre'>
        <Hero />
      </div>
      <div class="devicer"></div>
      <div className='vertical-gap'>
        <About />
      </div>
      <div class="devicer"></div>
      <div className='vertical-gap'>
        <Events />
      </div>
      <div class="devicer"></div>
      <div className='vertical-gap'>
        <Members />
      </div>
      <div class="devicer"></div>
      <div>
        <ContactUs />
      </div>
    </>
  )
}

export default Home