import { useState } from 'react';
import postImage from '../../images/ShortStory.png'

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
      image:postImage,
      userImage: 'https://via.placeholder.com/50',
      description: 'This is a detailed description of the post.',
    },

    {
        id: 2,
        username: '@johndoe',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: 'https://via.placeholder.com/50',
        description: 'This is a detailed description of the post.',
      },


      {
        id: 3,
        username: '@johndoe',
        timestamp: '2 hours ago',
        content: '#Poet',
        image: postImage,
        userImage: 'https://via.placeholder.com/50',
        description: 'This is a detailed description of the post.',
      },
      
      {
        id: 4,
        username: '@johndoe',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: 'https://via.placeholder.com/50',
        description: 'This is a detailed description of the post.',
      },

      {
        id: 4,
        username: '@johndoe',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: 'https://via.placeholder.com/50',
        description: 'This is a detailed description of the post.',
      },

      {
        id: 4,
        username: '@johndoe',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: 'https://via.placeholder.com/50',
        description: 'This is a detailed description of the post.',
      },

      {
        id: 4,
        username: '@johndoe',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: 'https://via.placeholder.com/50',
        description: 'This is a detailed description of the post.',
      },

      {
        id: 4,
        username: '@johndoe',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: 'https://via.placeholder.com/50',
        description: 'This is a detailed description of the post.',
      },

      {
        id: 4,
        username: '@johndoe',
        timestamp: '2 hours ago',
        content: 'This is a preview of the post content...',
        image: postImage,
        userImage: 'https://via.placeholder.com/50',
        description: 'This is a detailed description of the post.',
      },


    // Add more posts here
  ]);



  const filteredPosts = posts.filter((post) => {
    return post.content.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="feed-section p-4">
      {/* New Post Input */}


      <div className="search-filter-bar mb-4 flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar flex-grow p-2 border border-gray-300 rounded"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-by p-2 border border-gray-300 rounded"
        >
          <option value="date">Sort by Date</option>
          <option value="popularity">Sort by Popularity</option>
          <option value="likes">Sort by Likes</option>
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="category-filter p-2 border border-gray-300 rounded"
        >
          <option value="all">All Categories</option>
          <option value="tech">Technology</option>
          <option value="health">Health</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
      </div>

      {/* Posts Feed */}
      <div className="posts-feed grid grid-cols-3 gap-2">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post-card border border-gray-300 rounded p-3 w-[50vh]  mx-auto">
            <div className="user-info flex items-center mb-2">
              <img
                src={post.userImage}
                alt="User Profile"
                className="profile-pic w-8 h-8 rounded-full mr-2"
              />
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
                <img src={post.image} alt="Post Media" className="rounded w-[50vh] h-[20vh]" />
              </div>
            )}
            {post.description && (
              <div className="post-description mb-2">
                <p className="text-gray-700 text-sm">{post.description}</p>
              </div>
            )}
            <div className="post-actions flex space-x-6 p-3 ml-8">
              <button className="like-btn text-red-500 text-sm">❤️ Like</button>
              <button className="share-btn text-blue-500 text-sm">🔗 Share</button>
              <button className="comment-btn text-green-500 text-sm">💬 Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
