"use client"
import React, { useState } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function AdminPanel() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [blogUrl, setBlogUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert tags from comma-separated string to an array
    const tagsArray = tags.split(',').map(tag => tag.trim());

    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        author,
        date: date || new Date().toISOString(),
        tags: tagsArray,
        description,
        imageUrl,
        blogUrl  
      });
      
      setSuccessMessage('Blog post added successfully!');
      
      // Clear form fields after submission
      setTitle('');
      setAuthor('');
      setDate('');
      setTags('');
      setDescription('');
      setImageUrl('');
      setBlogUrl('');
    } catch (error) {
      console.error("Error adding blog post: ", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Add New Blog Post</h2>

      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Blog URL</label>
          <input
            type="text"
            value={blogUrl}
            onChange={(e) => setBlogUrl(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminPanel;
