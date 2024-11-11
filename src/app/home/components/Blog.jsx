"use client"
import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebaseConfig';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { FiArrowUpRight } from 'react-icons/fi'; // Import the icon

function RecentBlogPosts() {
  const [latestBlog, setLatestBlog] = useState(null);

  useEffect(() => {
    const fetchLatestBlogPost = async () => {
      const blogCollection = collection(db, 'blogs');
      const latestBlogQuery = query(blogCollection, orderBy('date', 'desc'), limit(1));
      const latestBlogSnapshot = await getDocs(latestBlogQuery);

      if (!latestBlogSnapshot.empty) {
        setLatestBlog(latestBlogSnapshot.docs[0].data());
      }
    };

    fetchLatestBlogPost();
  }, []);

  if (!latestBlog) {
    return <p>Loading...</p>;
  }

  return (
    <section className="p-6">
        <div className='bg-white p-4'>
      {/* Tag Filters */}
      <div className="flex space-x-4 mb-4">
        <button className="text-sm text-blue-600  bg-blue-100 px-3 py-1 rounded-full hover:bg-beige-400 hover:text-blue-600  transition">
          User
        </button>
        <button className="text-sm text-blue-600  bg-blue-200 px-3 py-1 rounded-full hover:bg-beige-400 hover:text-blue-600  transition">
          Vendor
        </button>
        <button className="text-sm text-blue-600 bg-blue-100  px-3 py-1 rounded-full hover:bg-beige-400 hover:text-blue-600 transition">
          Brand
        </button>
      </div>

      {/* Section Heading */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent blog posts</h2>

      {/* Blog Post Card */}
      <a
        href={latestBlog.blogUrl}
        target="_blank"
        rel="noopener noreferrer"
        className=" overflow-hidden  hover:shadow-md transition-shadow duration-200 block"
      >
        <img
          src={latestBlog.imageUrl}
          alt={latestBlog.title}
          className="w-full h-60 object-cover"
        />

        <div className="p-6">
          <p className="text-sm text-blue-600 mb-2 font-semibold">{latestBlog.author} • {latestBlog.date}</p>

          <h3 className="text-xl font-bold text-gray-800 flex justify-between items-center mb-2">
            {latestBlog.title}
            <FiArrowUpRight className="w-5 h-5 transform " /> {/* Icon with rotation */}
          </h3>

          <p className="text-gray-600 mb-4">{latestBlog.description}</p>

          <div className="flex space-x-2">
            {latestBlog.tags.map((tag) => (
              <span key={tag} className="text-sm text-blue-600 bg-blue-100 hover:bg-beige-400 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </a>
      </div>
    </section>
  );
}

export default RecentBlogPosts;
