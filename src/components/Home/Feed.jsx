import { useState } from 'react';
import postImage from '../../images/ShortStory.png'
import userImage from "../../images/Avatar.png"
import Navbar from '../Navbar';
import Footer from '../Footer';

const Feed = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('date');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const [posts] = useState([
    {
      id: 1,
      username: '@johndoe',
      timestamp: '2 hours ago',
      content: 'This is a preview of the post content...',
      image: postImage,
      userImage: userImage,
      description: 'This is a detailed description of the post.',
    },

    {
        id: 2,
        username: '@mortal',
        timestamp: '2 hours ago',
        content: '#story',
        image: postImage,
        userImage: userImage,
        description: 'This is a detailed description of the post.',
      },

      {
        id: 3,
        username: '@sandyrocks',
        timestamp: '2 hours ago',
        content: '#Poem',
        image: postImage,
        userImage: userImage,
        description: 'This is a detailed description of the post.',
      },
      
      {
        id: 4,
        username: '@julius',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: userImage,
        description: 'This is a detailed description of the post.',
      },

      {
        id: 5,
        username: '@enimes',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: userImage,
        description: 'This is a detailed description of the post.',
      },

      {
        id: 6,
        username: '@mobasir',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: userImage,
        description: 'This is a detailed description of the post.',
      },

      {
        id: 7,
        username: '@Ishowspeed',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: userImage,
        description: 'This is a detailed description of the post.',
      },

      {
        id: 8,
        username: '@deadpool',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: userImage,
        description: 'This is a detailed description of the post.',
      },

      {
        id: 9,
        username: '@wolverine',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: userImage,
        description: 'This is a detailed description of the post.',
      },

    // Add more posts here
  ]);

  const filteredPosts = posts.filter((post) => {
    return post.content.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Navbar />
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mt-5 mb-10'>
  Literatural<span className='text-cyan-300'> Post</span>
</h1>
      <div className="feed-section p-4">
        
        <div className="search-filter-bar mb-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar flex-grow p-2 border border-gray-300 rounded-2xl" />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-by p-2 border border-gray-300 rounded-2xl"
          >
            <option value="date">Sort by Date</option>
            <option value="popularity">Sort by Popularity</option>
            <option value="likes">Sort by Likes</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="category-filter p-2 border border-gray-300 rounded-2xl"
          >
            <option value="all">All Categories</option>
            <option value="tech">Technology</option>
            <option value="health">Health</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
        </div>

        {/* Posts Feed */}
        <div className="posts-feed grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="post-card border border-gray-300 rounded-2xl p-4">
              <div className="user-info flex items-center mb-2">
                <img
                  src={post.userImage}
                  alt="User Profile"
                  className="profile-pic w-8 h-8 rounded-full mr-2" />
                <div>
                  <span className="username font-bold text-sm">{post.username}</span>
                  <span className="timestamp text-xs text-gray-500 ml-2">{post.timestamp}</span>
                </div>
              </div>
              <div className="content-preview mb-2">
                <p className="text-sm">{post.content}</p>
                <button className="view-post text-blue-500 text-xs hover:underline">View Original Post</button>
              </div>
              {post.image && (
                <div className="post-media mb-2">
                  <img src={post.image} alt="Post Media" className="rounded w-full h-40 object-cover" />
                </div>
              )}
              {post.description && (
                <div className="post-description mb-2">
                  <p className="text-gray-700 text-sm">{post.description}</p>
                </div>
              )}
              <div className="post-actions flex justify-around p-3">
                <button className="like-btn text-red-500 text-sm">❤️ Like</button>
                <button className="share-btn text-blue-500 text-sm">🔗 Share</button>
                <button className="comment-btn text-green-500 text-sm">💬 Comment</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feed;
