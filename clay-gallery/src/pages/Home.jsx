import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeAbout from '../components/HomeAbout'
import BestOfCLayGallery from '../components/BestOfCLayGallery'
import MostPopular from '../components/MostPopular'
import ExploreSection from '../components/ExploreSection'
import TrendingNow from '../components/TrendingNow'
import Testimonial from '../components/Testimonial'
import StartJourney from '../components/StartJourney'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
  return (
    <div >
      <ScrollToTop/>
      <HomeHero/>
      <HomeAbout/>
      <BestOfCLayGallery/>
      <MostPopular/>
      <ExploreSection/>
      <TrendingNow/>
      <Testimonial/>
      <StartJourney/>
    </div>
  )
}

export default Home
