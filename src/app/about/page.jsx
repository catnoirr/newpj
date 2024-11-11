import React from 'react';
import Advertising from './components/Advertising'
import WhatWeDo from './components/WhatWeDo'
import OurStory from './components/OurStory'
import WayToAdvertiseOOH from './components/WayToAdvertiseOOH'
import EventEngagement from './components/EventEngagement'
const Page = () => {
  return (
    <div>
    <Advertising/>
    <WhatWeDo/>
    <OurStory/>
    <img src="./image 43.png" alt="news photo " className='py-5' />
<WayToAdvertiseOOH/>
<EventEngagement/>
    </div>
  );
};

export default Page;
