import React from 'react';
import Hero from './components/Hero'
import DigitalAgency from './components/DigitalAgency'
import OurClient from './components/OurClient'
import HowsItWork from './components/Steps'
import Blog from './components/Blog'
import Success from './components/Success'
import FAQ from './components/FAQ'
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
      <FAQ/>
      <EventEngagement/>
      </div>
    );
  };
  
  export default Page;