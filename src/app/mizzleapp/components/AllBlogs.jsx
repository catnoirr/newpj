"use client"
import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { FiArrowUpRight } from 'react-icons/fi'; // Import the icon
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
          <a
            key={post.id}
            href={post.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" overflow-hidden  hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6 relative">
              <p className="text-sm text-blue-600 font-semibold mb-1">{post.author} • {post.date}</p>

              <h3 className="text-lg font-bold text-gray-800 flex justify-between items-center mb-2">
                {post.title}
                <FiArrowUpRight className="w-5 h-5 transform " /> {/* Icon with rotation */}

              </h3>

              <p className="text-gray-600 mb-4">{post.description}</p>

              <div className="flex space-x-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm text-blue-600 bg-blue-100 hover:bg-beige-400 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default BlogPostsGrid;
