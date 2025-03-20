import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
  likes: number;
  liked: boolean;
  comments: string[];
}

const RegHeartIcon = FaRegHeart as React.ElementType;
const HeartIcon = FaHeart as React.ElementType;
const RegCommentIcon = FaRegComment as React.ElementType;
const BlogFeed: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Exploring AI in 2025",
      image: "https://source.unsplash.com/600x400/?ai,technology",
      content: "AI is changing the world. Learn how it will impact the future.",
      likes: 10,
      liked: false,
      comments: ["Exciting future!", "AI is mind-blowing!"],
    },
    {
      id: 2,
      title: "Mastering Web Development",
      image: "https://source.unsplash.com/600x400/?web,code",
      content: "Want to become a web dev? Here's everything you need to know.",
      likes: 5,
      liked: false,
      comments: ["Thanks for this!", "Great insights!"],
    },
  ]);
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
  const [openComments, setOpenComments] = useState<{ [key: number]: boolean }>({});
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: "", image: "", content: "" });

  // Handle like toggle
  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
      )
    );
  };

  // Handle comment submission
  const handleCommentSubmit = (postId: number) => {
    if (!commentInputs[postId]) return;
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, commentInputs[postId]] } : post
      )
    );
    setCommentInputs({ ...commentInputs, [postId]: "" });
  };

  // Handle new blog submission
  const handleAddBlog = () => {
    if (!newBlog.title || !newBlog.image || !newBlog.content) return;
    const newPost = {
      id: posts.length + 1,
      title: newBlog.title,
      image: newBlog.image,
      content: newBlog.content,
      likes: 0,
      liked: false,
      comments: [],
    };
    setPosts([newPost, ...posts]); // Add new blog at the top
    setIsAddBlogOpen(false);
    setNewBlog({ title: "", image: "", content: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 relative">
      <h2 className="text-4xl font-bold text-center mb-12">Blog Feed</h2>

      {/* Add Blog Button */}
      <button
        onClick={() => setIsAddBlogOpen(true)}
        className="absolute top-6 right-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        + Add Blog
      </button>

      {/* Blog Feed */}
      <div className="flex flex-col items-center gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <img src={post.image} alt={post.title} className="w-full rounded-lg mb-4" />
            <p className="text-gray-300">{post.content}</p>

            {/* Like and Comment Buttons */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <button onClick={() => handleLike(post.id)} className="text-xl">
                  {post.liked ? <HeartIcon className="text-red-500" /> : <RegHeartIcon />}
                </button>
                <span>{post.likes}</span>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => setOpenComments({ ...openComments, [post.id]: !openComments[post.id] })} className="text-xl">
                  <RegCommentIcon />
                </button>
                <span>{post.comments.length}</span>
              </div>
            </div>

            {/* Comments Section */}
            {openComments[post.id] && (
              <div className="mt-4">
                <div className="mb-2">
                  {post.comments.map((comment, index) => (
                    <p key={index} className="bg-gray-700 p-2 rounded-md my-1">{comment}</p>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentInputs[post.id] || ""}
                    onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                    className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white border-none"
                  />
                  <button onClick={() => handleCommentSubmit(post.id)} className="bg-blue-500 px-4 py-2 rounded-md">Post</button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Add Blog Popup */}
      {isAddBlogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-white p-6 rounded-lg text-black relative w-96">
            <button className="absolute top-2 right-2 text-black text-2xl cursor-pointer" onClick={() => setIsAddBlogOpen(false)}>✖</button>
            <h3 className="text-xl font-bold mb-4">Add New Blog</h3>

            <input
              type="text"
              placeholder="Title"
              className="w-full mb-3 p-2 border rounded"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full mb-3 p-2 border rounded"
              value={newBlog.image}
              onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
            />
            <textarea
              placeholder="Content"
              className="w-full mb-3 p-2 border rounded"
              rows={3}
              value={newBlog.content}
              onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            />
            <button onClick={handleAddBlog} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Add Blog</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogFeed;
