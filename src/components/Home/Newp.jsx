import { useState } from 'react';
import Navbar from '../Navbar';

import Footer from '../Footer';

export default function Newp() {
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: '@johndoe',
      timestamp: '2 hours ago',
      content: 'This is a preview of the post content...',
      image: 'https://via.placeholder.com/150',
      userImage: 'https://via.placeholder.com/50',
      description: 'This is a detailed description of the post.',
    },
    // Add more posts here
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      username: '@newuser', // Replace with the actual username
      timestamp: 'Just now',
      content: newPostContent,
      image: newPostImage,
      userImage: 'https://via.placeholder.com/50', // Replace with the actual user profile image
      description: 'This is a new post description',
    };
    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setNewPostImage(null);
  };

  return (
    <>
      <Navbar />
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mt-5 mb-10'>
  Create<span className='text-cyan-300'> Post</span>
</h1>
    <div className="max-w-2xl mx-auto mt-10">
      <div className="new-post-section mb-8 p-6 bg-white shadow-md rounded-lg border border-gray-200">
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <input
          type="file"
          onChange={handleImageUpload}
          className="mb-4 block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        />
        {newPostImage && (
          <div className="image-preview mb-4">
            <img src={newPostImage} alt="Selected" className="rounded-lg w-full object-cover h-48" />
          </div>
        )}
        <button
          onClick={handleAddPost}
          className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Post
        </button>
      </div>
      <Footer />
    </div>
    </>
  );
}
