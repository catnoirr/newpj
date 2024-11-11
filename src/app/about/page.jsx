import React from 'react';
import Advertising from './components/Advertising'
import WhatWeDo from './components/WhatWeDo'
import OurStory from './components/OurStory'
import WayToAdvertiseOOH from './components/WayToAdvertiseOOH'
import EventEngagement from './components/EventEngagement'
import AdvertisingBanner from './components/AdvertisingBanner'
import Featured from './components/Featured'
const Page = () => {
  return (
    <div>
    <AdvertisingBanner/>
    <Advertising/>
    <WhatWeDo/>
    <OurStory/>
    <Featured/>
    {/* <img src="./image 43.png" alt="news photo " className='py-5' /> */}
<WayToAdvertiseOOH/>
<EventEngagement/>
    </div>
  );
};

export default Page;
