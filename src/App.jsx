import React, { useState } from 'react'
import  {Navbar}  from './components/navbar/Navbar'
import Hero from './components/hero/Hero';
import Program from './components/programs/Program';
import Title from './components/title/Title';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Video from './components/videoplayer/Video';

const App = () => {
  const [playvideo,setplayvideo]= useState(false)
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle="OUR PROGRAM" title="What We Offer"/>
    <Program/>
    <About setplayvideo={setplayvideo}/>
    <Title subTitle="Gallery" title="Campus Photos"/>
    <Campus/>
    <Title subTitle="TESTIMONIALS" title="What student says"/>
    <Testimonials/>
    <Title subTitle="CONTACT US" title="Get in Touch"/>
    <Contact/>
    <Footer/>
    </div>
    <Video playvideo={playvideo} setplayvideo={setplayvideo}/>
    </div>
  )
}
export default App;
