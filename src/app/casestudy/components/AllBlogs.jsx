"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation"; // Import useRouter for programmatic navigation

function BlogPostsGrid() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const router = useRouter(); // Instantiate useRouter

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const blogCollection = collection(db, "blogs");
        const blogSnapshot = await getDocs(blogCollection);
        const blogs = blogSnapshot.docs
          .map((doc) => {
            const data = doc.data();

            // Extracting the fields from Firestore documents
            return {
              id: doc.id,
              title: data.title,
              description: data.description,
              image: data.image,
              tags: data.tags || [],
              isCaseStudy: data.isCaseStudy || false, // Check if it's a case study
              date: data.createdAt
                ? new Date(data.createdAt.seconds * 1000).toLocaleDateString()
                : "Unknown Date", // Convert Firestore Timestamp to date
              author: data.seo?.seoauthor || "Unknown Author", // Get author from `seo.seoauthor`
            };
          })
          .filter((blog) => blog.isCaseStudy); // Filter only case studies

        // Sort blogs by `createdAt` in descending order
        blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

        setBlogPosts(blogs);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to truncate description to the first sentence
  const truncateDescription = (description) => {
    if (!description) return "";
    const firstSentence = description.split(".")[0];
    return firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`;
  };

  const handlePostClick = (id) => {
    router.push(`/casestudy/${id}`); // Navigate to the blog post details page
  };

  if (blogPosts.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 h-60 rounded-t-lg"></div>
            <div className="p-6 bg-gray-50 rounded-b-lg">
              <div className="bg-gray-200 h-5 w-1/2 mb-2 rounded"></div>
              <div className="bg-gray-200 h-7 w-full mb-2 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }


  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">All Case Studies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => handlePostClick(post.id)}
            className="overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <img
              src={post.image}
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

              <p className="text-gray-600 mb-4">
                {truncateDescription(post.description)}
              </p>

              <div className="flex space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
                  ? "bg-purple-200 text-purple-700"
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
