// page.jsx
import React from 'react';
import CampusAmbassadorProgram from './components/CampusAmbassadorHero'; // Adjust the path as necessary
import CampusImpact from './components/CampusImpact'; // Adjust the path as necessary
import Services from './components/Services'; // Adjust the path as necessary
import RoleAndResponsibility from './components/RoleAndResponsibilities'; // Adjust the path as necessary
import HowItWorks from './components/HowItWorks';
import VideoAndStats from './components/VideoAndStats'
import FAQ from '../components/Faq'
const Page = () => {
  return (
    <div>
      <CampusAmbassadorProgram />
      <CampusImpact/>
      <Services/>
      <RoleAndResponsibility/>
      <HowItWorks/>
      <VideoAndStats/>
      <FAQ/>

    </div>
  );
};

export default Page;
