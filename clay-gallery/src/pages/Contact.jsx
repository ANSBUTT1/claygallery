import React from 'react'
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import ScrollToTop from '../components/ScrollToTop'
import FAQs from '../components/FAQs'
import StartJourney from '../components/StartJourney'

const Contact = () => {
  return (
    <div>
      <ScrollToTop/>
     <ContactHero/>
     <ContactForm/>
     <FAQs/>
     <StartJourney/>
    </div>
  )
}

export default Contact
