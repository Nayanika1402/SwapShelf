import { useState } from 'react';
import Navbar from '../Navbar';
import CategorySection from './CategorySection';
import thinkingFastAndSlow from '../../images/bookfeed.png';
import Footer from '../Footer';

// Sample data for categories and books
const categories = [
  {
    title: "India's Top Reads",
    books: [
      { title: "Thinking Fast and Slow", image: thinkingFastAndSlow, price: "₹ 575", discount: "25% OFF", rating: "⭐⭐⭐⭐" },
      { title: "Ikigai", image: thinkingFastAndSlow, price: "₹ 495", discount: "10% OFF", rating: "⭐⭐⭐⭐⭐" },
      { title: "Verity", image: thinkingFastAndSlow, price: "₹ 327", discount: "25% OFF", rating: "⭐⭐⭐⭐" },
      { title: "The Silent Patient", image: thinkingFastAndSlow, price: "₹ 327", discount: "25% OFF", rating: "⭐⭐⭐⭐⭐" },
      { title: "Don't Believe Everything You Think", image: thinkingFastAndSlow, price: "₹ 254", discount: "20% OFF", rating: "⭐⭐⭐⭐" },
      { title: "48 Laws of Power", image: thinkingFastAndSlow, price: "₹ 279", discount: "25% OFF", rating: "⭐⭐⭐⭐" },
    ],
  },
  {
    title: "Book Sets",
    books: [
      { title: "The 5 Resets", image: thinkingFastAndSlow, price: "₹ 399", discount: "10% OFF", rating: "⭐⭐⭐⭐" },
      { title: "The Lost Symbol", image: thinkingFastAndSlow, price: "₹ 399", discount: "30% OFF", rating: "⭐⭐⭐⭐⭐" },
      { title: "NCERT & CBSE", image: thinkingFastAndSlow, price: "₹ 1356", discount: "20% OFF", rating: "⭐⭐⭐⭐" },
      { title: "All Legends Writing Practice", image: thinkingFastAndSlow, price: "₹ 522", discount: "10% OFF", rating: "⭐⭐⭐⭐" },
      { title: "Three-Body Problem", image: thinkingFastAndSlow, price: "₹ 1367", discount: "20% OFF", rating: "⭐⭐⭐⭐⭐" },
      { title: "Harry Potter 1-3 Box Set", image: thinkingFastAndSlow, price: "₹ 1223", discount: "25% OFF", rating: "⭐⭐⭐⭐⭐" },
    ],
  },
  // More categories can be added here
];

function Category() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('date');
    

  return (
   <>
   <Navbar/>
   <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mt-5 mb-10'>
  Book<span className='text-cyan-300'> Gallery</span>
</h1>
    
      <div className="search-filter-bar mb-10 flex space-x-4 p-5 ">
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
          className="category-filter p-2 border border-gray-300 rounded-2xl"
        >
          <option value="all">All Categories</option>
          <option value="tech">Technology</option>
          <option value="health">Health</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
      </div>

    <div className="container mx-auto p-6">
      {categories.map((category, index) => (
        <CategorySection key={index} title={category.title} books={category.books} />
      ))}
    </div>
    <Footer />
    </>
  );
}

export default Category;
