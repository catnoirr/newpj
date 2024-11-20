"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Correct way to fetch params in the App Router
import { db } from "../../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const BlogDetails = () => {
  const { id } = useParams(); // Fetch `id` from dynamic route
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const blogRef = doc(db, "blogs", id);
          const blogSnap = await getDoc(blogRef);

          if (blogSnap.exists()) {
            const data = blogSnap.data();

            // Format the blog data
            const formattedBlog = {
              ...data,
              createdAt: data.createdAt
                ? new Date(data.createdAt.seconds * 1000).toLocaleDateString()
                : "Unknown Date", // Format createdAt
              author: data.seo?.seoauthor || "Unknown Author",
              seoImage: data.seo?.image || null,
              seoDescription: data.seo?.description || "",
              seoAuthor: data.seo?.seoauthor || "Unknown SEO Author", // Added seoAuthor
              tags: data.tags || [], // Get tags
            };

            setBlog(formattedBlog);
          } else {
            console.error("No blog found with the given ID");
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-20 w-full bg-gray-200 rounded-md"></div>
        <div className="mt-4 space-y-4">
          <div className="h-10 w-1/2 bg-gray-200 rounded-md"></div>
          <div className="h-10 w-3/4 bg-gray-200 rounded-md"></div>
          <div className="h-10 w-1/2 bg-gray-200 rounded-md"></div>
          <div className="h-10 w-3/4 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-red-600">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
        {blog.title}
      </h1>

      {/* Metadata */}
      <div className="flex  text-sm text-gray-500 mb-10 space-x-2">
        <span className="font-semibold">{blog.author}</span>
        <span>•</span>
        <span>{blog.createdAt}</span>
      </div>

      {/* Main Blog Image */}
      {blog.image && (
        <div className="mb-10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full md:h-[600px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      )}

      {/* Blog Description using dangerouslySetInnerHTML */}
      {blog.editorDescription && (
        <div className="text-lg text-gray-700 mb-10  md:p-12 p-6 ">
          <strong className="block mb-2 text-xl font-semibold text-gray-800"></strong>
          <div dangerouslySetInnerHTML={{ __html: blog.editorDescription }} />
        </div>
      )}

      {/* SEO Image */}
      {blog.seoImage && (
        <div className="mb-10">
          <img
            src={blog.seoImage}
            alt="SEO Image"
            className="w-full h-[500px] object-contain  transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* SEO Description wrapped in double quotes */}
      {blog.seoDescription && (
        <div className=" text-gray-800 mb-10  p-8  text-center">
          <p className="text-4xl font-semibold">"{blog.seoDescription}"</p>
          {/* <div className="text-lg text-gray-800 mb-10 bg-gray-50 p-6 rounded-lg shadow-lg"> */}
          {/* <strong className="block text-xl font-semibold text-gray-800">SEO Author:</strong> */}
          <p className="text-center text-gray-500">---  {blog.seoAuthor}</p>
        {/* </div> */}
        </div>
      )}

      {/* SEO Author */}
      {/* {blog.seoAuthor && (
        <div className="text-lg text-gray-800 mb-10 bg-gray-50 p-6 rounded-lg shadow-lg">
          <strong className="block text-xl font-semibold text-gray-800">SEO Author:</strong>
          <p>{blog.seoAuthor}</p>
        </div>
      )} */}

      {/* Blog Content */}
      {blog.content && (
        <div className="prose max-w-none text-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Content</h2>
          <p>{blog.content}</p>
        </div>
      )}

      {/* Popular Tags */}
      {blog.tags.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h3>
          <div className="flex flex-wrap gap-4">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition-transform duration-300 hover:scale-105"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
