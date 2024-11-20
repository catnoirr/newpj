"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../../../firebaseConfig";
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation"; // Use Next.js router for navigation

function RecentBlogPosts() {
  const [latestBlog, setLatestBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Next.js router for client-side navigation

  // Fetch the latest case study on component mount
  useEffect(() => {
    const fetchLatestCaseStudy = async () => {
      try {
        setLoading(true); // Start loading
        const blogCollection = collection(db, "blogs");

        // Query to get the most recent blog post that is also a case study
        const latestCaseStudyQuery = query(
          blogCollection,
          where("isCaseStudy", "==", true), // Only fetch case studies
          orderBy("createdAt", "desc"),
          limit(1)
        );

        const latestBlogSnapshot = await getDocs(latestCaseStudyQuery);

        // If a case study is found, set it to state
        if (!latestBlogSnapshot.empty) {
          const latestDoc = latestBlogSnapshot.docs[0];
          const blogData = latestDoc.data();

          setLatestBlog({
            id: latestDoc.id,
            ...blogData,
            createdAt: blogData.createdAt
              ? new Date(blogData.createdAt.seconds * 1000).toLocaleDateString()
              : "Unknown Date",
            author: blogData.seo?.seoauthor || "Unknown Author",
          });
        } else {
          setLatestBlog(null); // No case study found
        }
      } catch (err) {
        if (err.code === "failed-precondition") {
          setError(
            "Firestore Index Error: Please create the required composite index in Firebase Console."
          );
        } else {
          setError("Error fetching the latest case study. Please try again.");
        }
        console.error("Error fetching the latest case study:", err);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchLatestCaseStudy();
  }, []);

  // Function to truncate the description to the first sentence
  const truncateDescription = (description) => {
    if (!description) return "";
    const firstSentence = description.split(".")[0];
    return firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`;
  };

  // Render a loading message
  if (!latestBlog) {
    return (
      <section className="p-6 bg-white shadow-md rounded-lg">
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Recent Case Study
        </h2> */}
        {/* Loading Placeholder */}
        <div className="animate-pulse">
          <div className="bg-gray-200 h-64 rounded-t-lg"></div>
          <div className="p-6 bg-gray-50 rounded-b-lg">
            <div className="bg-gray-200 h-5 w-1/2 mb-2 rounded"></div>
            <div className="bg-gray-200 h-7 w-full mb-2 rounded"></div>
            <div className="bg-gray-200 h-4 w-3/4 mb-4 rounded"></div>
            <div className="flex gap-2">
              <div className="bg-gray-200 h-6 w-12 rounded-full"></div>
              <div className="bg-gray-200 h-6 w-16 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Render an error message if any
  if (error) {
    return (
      <div className="flex items-center justify-center h-60">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  // Render a message if no case study is found
  if (!latestBlog) {
    return (
      <div className="flex items-center justify-center h-60">
        <p className="text-lg text-gray-500">No case study available at the moment.</p>
      </div>
    );
  }

  // Render the latest case study
  return (
    <section className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Recent Case Study
      </h2>

      <div
        onClick={() => router.push(`/blogs/${latestBlog.id}`)}
        className="block overflow-hidden hover:shadow-lg transition-shadow duration-200 rounded-lg cursor-pointer"
      >
        {/* Blog Image */}
        <img
          src={latestBlog.image || "/placeholder-image.jpg"}
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
            {latestBlog.title || "Untitled Case Study"}
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
