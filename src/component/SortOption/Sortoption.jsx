import React, { useState } from 'react';
import './Sortoption.css';

function Sortoption() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Default sorting');

  const options = [
    'Default sorting',
    'Sort by popularity',
    'Sort by average rating',
    'Sort by latest',
    'Sort by price: low to high',
    'Sort by price: high to low',
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-sort-wrapper">
      <button
        className="custom-sort-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="custom-sort-dropdown">
          {options.map((option) => (
            <label key={option} className="custom-sort-option">
              <input
                type="radio"
                name="sort"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleSelect(option)}
              />
              <span className="label-text">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sortoption;





