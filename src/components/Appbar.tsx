"use client";
import DominoIcon from "./3dots";
import { DropDownBatsman } from "./DropDownBatsman";
import { DropdownBowlers } from "./DropDownBolwers";
import { Rankings } from "./Rankings";
import { SearchBar } from "./SearchBar";

// Define the type for the search term
type SearchTerm = string; // Assuming the search term is a string

export const Appbar = () => {
  const handleSearch = (term: SearchTerm) => {
    console.log('Search for:', term);
    // Implement your search logic here, e.g., filter a list, call an API, etc.
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-md">
      {/* Left Section */}
      <div className="flex space-x-4">
        <div className="p-2">
          <DropDownBatsman />
        </div>
        <div className="p-2">
          <DropdownBowlers />
        </div>
        <div className="p-2">
          <Rankings />
        </div>
      </div>

      {/* Center Section */}
      <div className="flex-grow flex justify-center flex-row">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Right Section */}
      <div className="flex justify-right p-2 cursor-pointer hover:scale-105 transition-transform duration-200">
        <DominoIcon />
      </div>
    </div>
  );
};
