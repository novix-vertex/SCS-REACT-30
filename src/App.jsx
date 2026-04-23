import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Facts from './components/Facts'
import Partners from './components/Partners'
import Other from './components/Other'

const App = () => {
  return (
    <main className='p-8'>
      <Navbar />
      <Hero />
      <Explore />
      <Facts />
      <Partners />
      <Other />
    </main>

  )
}

export default App