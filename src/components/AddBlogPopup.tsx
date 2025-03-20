import React, { useState } from "react";
import axios from "axios";

interface AddBlogPopupProps {
  onClose: () => void;
}

const AddBlogPopup: React.FC<AddBlogPopupProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/blogs", {
        title,
        content,
        imageUrl,
        likes: 0,
      });
      onClose();
      window.location.reload(); // Refresh after adding blog
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="bg-white p-6 rounded-lg relative w-96">
        <button
          className="absolute top-2 right-2 text-black text-2xl cursor-pointer"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 mb-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="w-full p-2 mb-2 border rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL (Optional)"
            className="w-full p-2 mb-2 border rounded"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPopup;
