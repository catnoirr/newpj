
import React from 'react';
import Hero from './components/HeroSection'; // Adjust the path if `Hero.js` is in a different directory
import HowItWorks from './components/HowItWorks';
import SecondSection from './components/Section2'; // Adjust the path if `Hero.js` is in a different directory
import SponsorshipSection from './components/SponsorshipSection.jsx'
import Testimonials from './components/Solved.jsx'
import FAQ from './components/Faq.jsx'
import ContactSection from './components/Contacts'
const Page = () => {
  return (
    
    <div className='bg-white'>
      <Hero />
     
      <SecondSection/>
       <HowItWorks/>
       <SponsorshipSection/>
       <Testimonials/>
       <FAQ/>
       <ContactSection/>
    </div>
  );
};

export default Page;
