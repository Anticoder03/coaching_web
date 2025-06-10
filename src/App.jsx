import { useState } from 'react'

import './App.css'
import HeroSection from './components/Header/HeroSection'
import ResponsiveNavbar from './components/Header/ResponsiveNavbar'
import HorizontalMarquee from './components/Main/HorizontalMarquee'
import HorizontalExpanable from './components/Accordion/HorizontalExpanable'
import Card from './components/Cards/Card'
import Contact_form from './components/Form/ContactForm'
import About from './components/Cards/About'
import ResponsiveFooter from './components/Footer/ResponsiveFooter'
function App() {

  return (
    <>
       <ResponsiveNavbar />
       <HeroSection />
       <HorizontalMarquee />
       <HorizontalExpanable />
       <About />
       <Card />
       <Contact_form />
       <ResponsiveFooter />
    </>
  )
}

export default App
