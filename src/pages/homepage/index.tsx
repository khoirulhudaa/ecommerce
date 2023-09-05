import React from 'react'
import { ContentHomepage, Footer, Hero, Navbar } from '../../layout'

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ContentHomepage />
      <Footer />
    </>
  )
}

export default Homepage
