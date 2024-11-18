"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

function RecentBlogPosts() {
  const [latestBlog, setLatestBlog] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchLatestBlogPost = async () => {
      try {
        const blogCollection = collection(db, "blogs");
        const latestBlogQuery = query(blogCollection, orderBy("createdAt", "desc"), limit(1));
        const latestBlogSnapshot = await getDocs(latestBlogQuery);

        if (!latestBlogSnapshot.empty) {
          const latestDoc = latestBlogSnapshot.docs[0];
          const blogData = latestDoc.data();

          setLatestBlog({
            id: latestDoc.id, // Document ID for dynamic routing
            ...blogData,
            createdAt: blogData.createdAt
              ? new Date(blogData.createdAt.seconds * 1000).toLocaleDateString()
              : "Unknown Date", // Format createdAt
            author: blogData.seo?.seoauthor || "Unknown Author", // Fetch author from seo.seoauthor
          });
        }
      } catch (error) {
        console.error("Error fetching the latest blog post:", error);
      }
    };

    fetchLatestBlogPost();
  }, []);

  const truncateDescription = (description) => {
    if (!description) return "";
    const firstSentence = description.split(".")[0]; // Split by first period
    return firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`; // Ensure it ends with a period
  };

  if (!latestBlog) {
    return (
      <div className="flex items-center justify-center h-60">
        <p className="text-lg text-gray-500">Loading the latest blog...</p>
      </div>
    );
  }

  return (
    <section className="p-6 bg-white shadow-md rounded-lg ">
      {/* Section Heading */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Recent Blog Post
      </h2>

      {/* Blog Post Card */}
      <div
 onClick={() => router.push(`/blogs/${latestBlog.id}`)}  
       className="block overflow-hidden hover:shadow-lg transition-shadow duration-200 rounded-lg cursor-pointer"
      >
        {/* Blog Image */}
        <img
          src={latestBlog.image || "/placeholder-image.jpg"} // Fallback image
          alt={latestBlog.title || "Blog Image"}
          className="w-full h-64 object-cover rounded-t-lg"
        />

        {/* Blog Content */}
        <div className="p-6 bg-gray-50 rounded-b-lg">
          {/* Blog Metadata */}
          <p className="text-sm text-gray-500 mb-2">
            By <span className="font-medium">{latestBlog.author}</span> •{" "}
            {latestBlog.createdAt}
          </p>

          {/* Blog Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 flex justify-between items-center">
            {latestBlog.title || "Untitled Blog"}
            
            <FiArrowUpRight className="w-5 h-5 text-gray-500 cursor-pointer" />
          </h3>

          {/* Blog Description */}
          <p className="text-gray-600 mb-4">
            {truncateDescription(latestBlog.description) || "No description available."}
          </p>

          {/* Blog Tags */}
          <div className="flex flex-wrap gap-2">
            {latestBlog.tags && latestBlog.tags.length > 0 ? (
              latestBlog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-full cursor-pointer"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-400">No tags</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentBlogPosts;
