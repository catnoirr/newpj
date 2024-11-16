"use client"
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
        const blogRef = doc(db, "blogs", id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlog(blogSnap.data());
        } else {
          console.error("No blog found with the given ID");
        }
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">
        By {blog.author} • {blog.date}
      </p>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-60 object-cover mb-6"
      />
      <p className="text-gray-800">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
