import React from 'react'
import AboutHero from '../components/AboutHero'
import StartJourney from '../components/StartJourney'
import OurStory from '../components/OurStory'
import OurVissionGoal from '../components/OurVissionGoal'
import ScrollToTop from '../components/ScrollToTop'

const About = () => {
  return (
    <div>
      <ScrollToTop/>
      <AboutHero/>
      <OurStory/>
      <OurVissionGoal/>
      <StartJourney/>
    </div>
  )
}

export default About
