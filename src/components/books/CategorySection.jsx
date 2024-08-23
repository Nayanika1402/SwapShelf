

const CategorySection = ({ title, books = [] }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {books.map((book, idx) => (
          <div key={idx} className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="h-40 bg-gray-100 flex items-center justify-center mb-4">
              {/* Using imported image variable directly */}
              <img src={book.image} alt={book.title} className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{book.price}</p>
            <p className="text-sm text-green-600 mb-1">{book.discount}</p>
            <p className="text-sm text-yellow-500">{book.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
