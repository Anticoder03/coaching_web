import { useState } from 'react'

import './App.css'
import HeroSection from './components/Header/HeroSection'
import ResponsiveNavbar from './components/Header/ResponsiveNavbar'
import HorizontalMarquee from './components/Main/HorizontalMarquee'

function App() {

  return (
    <>
       <ResponsiveNavbar />
       <HeroSection />
       <HorizontalMarquee />
    </>
  )
}

export default App
