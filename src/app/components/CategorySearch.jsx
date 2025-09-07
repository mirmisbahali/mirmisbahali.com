"use client";
import React, { useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const CategorySearch = ({ categories, onCategorySelect, selectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Filter categories based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter(category =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  }, [searchTerm, categories]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) setIsOpen(true);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredCategories.length === 1) {
      handleCategoryClick(filteredCategories[0]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setSearchTerm("");
      inputRef.current?.blur();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search more categories..."
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          className="bg-transparent text-white placeholder-[#ADB7BE] border-b-2 border-slate-600 focus:border-primary-500 outline-none py-2 pr-8 pl-2 text-lg transition-colors duration-200"
          style={{ minWidth: "200px" }}
        />
        <MagnifyingGlassIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#ADB7BE]" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#181818] border border-slate-600 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`w-full text-left px-4 py-3 text-lg transition-colors duration-200 hover:bg-[#262626] ${
                  selectedCategory === category
                    ? "text-primary-500 bg-[#262626]"
                    : "text-white"
                }`}
              >
                {category}
              </button>
            ))
          ) : (
            <div className="px-4 py-3 text-[#ADB7BE] text-lg">
              No categories found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategorySearch;