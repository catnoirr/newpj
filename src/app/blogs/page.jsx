import React from 'react';
// import Hero from './components/Hero'
import RecentBlog from './components/RecentBlog'
import AllBlogs from './/components/AllBlogs'
const Page = () => {
  return (
    <div className='bg-gray-100'>
    {/* <Hero/> */}
    <RecentBlog/>
    <AllBlogs/>
    </div>
  );
};

export default Page;
