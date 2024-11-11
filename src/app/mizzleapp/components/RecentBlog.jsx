"use client"
import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebaseConfig';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

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
    <section className="p-6 bg-white">
      {/* Tag Filters */}
      <div className="flex space-x-4 mb-4">
        <button className="text-sm text-purple-700 border border-purple-700 px-3 py-1 rounded-full hover:bg-purple-700 hover:text-white transition">
          User
        </button>
        <button className="text-sm text-purple-700 border border-purple-700 px-3 py-1 rounded-full hover:bg-purple-700 hover:text-white transition">
          Vendor
        </button>
        <button className="text-sm text-purple-700 border border-purple-700 px-3 py-1 rounded-full hover:bg-purple-700 hover:text-white transition">
          Brand
        </button>
      </div>

      {/* Section Heading */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent blog posts</h2>

      {/* Blog Post Card */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        {/* Image */}
        <img
          src={latestBlog.imageUrl}
          alt={latestBlog.title}
          className="w-full h-60 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          {/* Author and Date */}
          <p className="text-sm text-gray-500 mb-2">
            {latestBlog.author} • {latestBlog.date}
          </p>

          {/* Post Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">{latestBlog.title}</h3>

          {/* Post Description */}
          <p className="text-gray-600 mb-4">{latestBlog.description}</p>

          {/* Tags */}
          <div className="flex space-x-2 mb-4">
            {latestBlog.tags.map((tag) => (
              <span key={tag} className="text-sm text-blue-700 bg-blue-100 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          {/* Read More Link */}
          <a
            href={latestBlog.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 text-lg font-semibold hover:underline flex items-center"
          >
            <span className="mr-2">Read more</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-9.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 001.414 1.414l1.293-1.293V14a1 1 0 102 0V8.414l1.293 1.293a1 1 0 001.414-1.414l-3-3z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default RecentBlogPosts;
