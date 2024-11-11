// BlogPostsGrid.js
"use client"
import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function BlogPostsGrid() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const blogs = blogSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Sort blogs by date in descending order (latest first)
      blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

      setBlogPosts(blogs);
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">All blog posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-6">
              <p className="text-sm text-gray-500 mb-1">{post.author} • {post.date}</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>

              <div className="flex space-x-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm text-blue-700 bg-blue-100 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <a href={post.blogUrl} target="_blank" rel="noopener noreferrer" className="text-purple-700 text-lg font-semibold hover:underline flex items-center">
                <span className="mr-2">Read more</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-9.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 001.414 1.414l1.293-1.293V14a1 1 0 102 0V8.414l1.293 1.293a1 1 0 001.414-1.414l-3-3z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPostsGrid;
