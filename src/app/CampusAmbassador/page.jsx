// page.jsx
import React from 'react';
import CampusAmbassadorProgram from './components/CampusAmbassadorHero'; // Adjust the path as necessary
import CampusImpact from './components/CampusImpact'; // Adjust the path as necessary
import Services from './components/Services'; // Adjust the path as necessary
import RoleAndResponsibility from './components/RoleAndResponsibilities'; // Adjust the path as necessary
import HowItWorks from './components/HowItWorks';
import VideoAndStats from './components/VideoAndStats'
import OurStory from './components/OurStory'
import FAQ from './components/Faq'
import Solved from './components/Solved'
import ContactSection from './components/ContactSection'
const Page = () => {
  return (
    <div className='bg-white'>
      <CampusAmbassadorProgram />
      <CampusImpact/>
      <Services/>
      <RoleAndResponsibility/>
      <HowItWorks/>
      <OurStory/>
      <VideoAndStats/>
      <Solved/>
      <FAQ/>
      <ContactSection/>

    </div>
  );
};

export default Page;
