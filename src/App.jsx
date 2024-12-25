import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import OurBrands from './Components/Our Brands/OurBrands'
import AboutUs from './Components/About Us/AboutUs'
import HeroSection from './Components/Hero Section/HeroSection'
import "./App.css";
import ApplySection from './Components/Apply Section/ApplySection'
import FeaturesSection from './Components/Features Section/FeaturesSection'
import CallUs from './Components/Call Us/CallUs'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <OurBrands/>
    <AboutUs/>
    <ApplySection/>
    <FeaturesSection/>
    <CallUs/>
    <Footer/>
    </>

  )
}

export default App