import React from 'react';

interface SearchBarDropdownProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const SearchBarDropdown: React.FC<SearchBarDropdownProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/2 p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-1/4 p-2 border-none rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <option value="  ">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBarDropdown;
