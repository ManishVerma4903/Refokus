import React from 'react'
import Nav from './components/Nav'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Card from './components/Card'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
 
  return (
    <div className='w-full   bg-zinc-900'>

      <Nav/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Card/>
      <Footer />


    </div>
  )
}

export default App