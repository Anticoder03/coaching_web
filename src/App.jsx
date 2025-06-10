import { useState } from 'react'

import './App.css'
import HeroSection from './components/Header/HeroSection'
import ResponsiveNavbar from './components/Header/ResponsiveNavbar'
import HorizontalMarquee from './components/Main/HorizontalMarquee'
import HorizontalExpanable from './components/Accordion/HorizontalExpanable'
import Card from './components/Cards/Card'
function App() {

  return (
    <>
       <ResponsiveNavbar />
       <HeroSection />
       <HorizontalMarquee />
       <HorizontalExpanable />
       <Card />
    </>
  )
}

export default App
