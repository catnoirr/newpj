
// import React from 'react';
// import Hero from './components/HeroSection'; // Adjust the path if `Hero.js` is in a different directory
// import Section from './components/Section'; // Adjust the path if `Hero.js` is in a different directory
// import SecondSection from './components/Section2'; // Adjust the path if `Hero.js` is in a different directory
// import SponsorshipSection from './components/SponsorshipSection.jsx'
// import Testimonials from './components/Solved.jsx'
// import FAQ from './components/Faq.jsx'
// import ContactSection from './components/ContactSection.jsx'
// const Page = () => {
//   return (
    
//     <div className='bg-gray-100'>
//       <Hero />
     
//       <SecondSection/>
//        <Section/>
//        <SponsorshipSection/>
//        <Testimonials/>
//        <FAQ/>
//        <ContactSection/>
//     </div>
//   );
// };

// export default Page;

import React from 'react';
import Hero from './components/Hero'
import DigitalAgency from './components/DigitalAgency'
import OurClient from './components/OurClient'
import HowsItWork from './components/Steps'
import Blog from './components/Blog'
import Success from './components/Success'
import Questions from './components/Questions'
import EventEngagement from './components/EventEngagement'
import Campaign from './components/Campaign'


const Page = () => {
    return (
      <div>    
      <Hero/>
      <DigitalAgency/>
      <OurClient/>
      <Campaign/>
      <HowsItWork/>
      <div className=' my-8 '>
        <img src="./image 43.png" alt="image "  />
      </div>
      <Blog/>
      <Success/>
      <Questions/>
      <EventEngagement/>
      </div>
    );
  };
  
  export default Page;
