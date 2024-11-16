"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";

function BlogPostsGrid() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogCollection = collection(db, "blogs");
      const blogSnapshot = await getDocs(blogCollection);
      const blogs = blogSnapshot.docs.map((doc) => ({
        id: doc.id, // Firebase document ID
        ...doc.data(),
      }));

      // Sort blogs by date in descending order
      blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

      setBlogPosts(blogs);
    };

    fetchBlogPosts();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current page's blog posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">All blog posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <a
            key={post.id}
            href={`/blogs/${post.id}`} // Dynamic route using Firebase document ID
            className="overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6 relative">
              <p className="text-sm text-blue-600 font-semibold mb-1">
                {post.author} • {post.date}
              </p>

              <h3 className="text-lg font-bold text-gray-800 flex justify-between items-center mb-2">
                {post.title}
                <FiArrowUpRight className="w-5 h-5 transform" />
              </h3>

              <p className="text-gray-600 mb-4">{post.description}</p>

              <div className="flex space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-blue-600 bg-blue-100 hover:bg-beige-400 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-around items-center space-x-2 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-500 hover:text-gray-700 flex items-center"
        >
          <FiArrowLeft className="mr-1" />
          Previous
        </button>

        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 text-gray-700 rounded ${
                currentPage === index + 1
                  ? "text-purple-700"
                  : "hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-500 hover:text-gray-700 flex items-center"
        >
          Next
          <FiArrowRight className="ml-1" />
        </button>
      </div>
    </section>
  );
}

export default BlogPostsGrid;
