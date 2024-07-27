import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ThisWeeksSpecials from './ThisWeeksSpecials'
import Testimonials from './Testimonials'
import About from './About'

const MainPage = () => {
  return (
    <>
    <section>
        <div className='layout'>
            <div className ="header-container">
                <Header/>
            </div>
            <div className ="main-container">
                <Main/>
            </div>
            <div className ="this-weeks-specials">
                <ThisWeeksSpecials/>
            </div>
            <div className ="testimonials">
                <Testimonials/>
            </div>
            <div className ="about">
                <About/>
            </div>
            <div className ="footer-container">
                <Footer/>
            </div>
        </div>
    </section>
    </>

  )
}

export default MainPage
