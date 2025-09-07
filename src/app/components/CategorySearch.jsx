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
      {/* Apple-style Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          className="bg-white/5 backdrop-blur-md border border-white/10 focus:border-white/20 text-white placeholder-slate-400 rounded-2xl px-4 py-3 pl-10 pr-4 text-base font-medium outline-none transition-all duration-300 shadow-sm focus:shadow-md hover:bg-white/10"
          style={{ minWidth: "220px" }}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
      </div>

      {/* Apple-style Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 max-h-64 overflow-hidden">
          <div className="max-h-64 overflow-y-auto">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-white/10 ${
                    selectedCategory === category
                      ? "text-primary-400 bg-white/5"
                      : "text-white"
                  } ${index === 0 ? 'rounded-t-2xl' : ''} ${index === filteredCategories.length - 1 ? 'rounded-b-2xl' : ''}`}
                >
                  <span className="tracking-wide">{category}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-6 text-slate-400 text-base font-light text-center rounded-2xl">
                No categories found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySearch;