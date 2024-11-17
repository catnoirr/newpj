// app/blog/[id]/page.js
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

// Fetch blog data server-side directly in the component
const BlogDetails = async ({ params }) => {
  const { id } = params; // Get the dynamic route parameter `id`

  try {
    // Fetch the blog document from Firestore using the provided `id`
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
        seoAuthor: data.seo?.seoauthor || "Unknown SEO Author",
        tags: data.tags || [], // Get tags
      };

      return (
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Title Section */}
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
            {formattedBlog.title}
          </h1>

          {/* Metadata */}
          <div className="flex text-sm text-gray-500 mb-10 space-x-2">
            <span className="font-semibold">{formattedBlog.author}</span>
            <span>•</span>
            <span>{formattedBlog.createdAt}</span>
          </div>

          {/* Main Blog Image */}
          {formattedBlog.image && (
            <div className="mb-10">
              <img
                src={formattedBlog.image}
                alt={formattedBlog.title}
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          )}

          {/* Blog Description */}
          {formattedBlog.editorDescription && (
            <div className="text-lg text-gray-700 mb-10 p-12">
              <div
                dangerouslySetInnerHTML={{
                  __html: formattedBlog.editorDescription,
                }}
              />
            </div>
          )}

          {/* SEO Image */}
          {formattedBlog.seoImage && (
            <div className="mb-10">
              <img
                src={formattedBlog.seoImage}
                alt="SEO Image"
                className="w-full h-[500px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}

          {/* SEO Description */}
          {formattedBlog.seoDescription && (
            <div className="text-gray-800 mb-10 p-8 text-center">
              <p className="text-4xl font-semibold">"{formattedBlog.seoDescription}"</p>
              <p className="text-center text-gray-500">--- {formattedBlog.seoAuthor}</p>
            </div>
          )}

          {/* Blog Content */}
          {formattedBlog.content && (
            <div className="prose max-w-none text-gray-800 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Content</h2>
              <p>{formattedBlog.content}</p>
            </div>
          )}

          {/* Popular Tags */}
          {formattedBlog.tags.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-4">
                {formattedBlog.tags.map((tag, index) => (
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
    } else {
      // Handle if no blog is found
      return (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg font-medium text-red-600">Blog not found.</p>
        </div>
      );
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-red-600">Error fetching blog.</p>
      </div>
    );
  }
};

export default BlogDetails;
