import {useState} from 'react'

export default function Newp() {

    const [newPostContent, setNewPostContent] = useState('');
    const [newPostImage, setNewPostImage] = useState(null);
    const [posts,setPosts] = useState([
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
    <div>
            <div className="new-post-section mb-4 p-4 border border-gray-300 rounded">
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        ></textarea>
        <input type="file" onChange={handleImageUpload} className="mb-2" />
        {newPostImage && (
          <div className="image-preview mb-2">
            <img src={newPostImage} alt="Selected" className="rounded w-full" />
          </div>
        )}
        <button
          onClick={handleAddPost}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Post
        </button>
      </div>
    </div>
  )
}
