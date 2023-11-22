


import React, { useState } from 'react';
import { ImEqualizer } from 'react-icons/im';
import { AiOutlineDown } from 'react-icons/ai';
import './Navbar.css';

function Navbar({ onViewChange, onSortingChange }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentGrouping, setCurrentGrouping] = useState('status');
  const [currentSorting, setCurrentSorting] = useState(null); // Track current sorting

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleGroupingChange = (e) => {
    const selectedValue = e.target.value;
  
    setCurrentGrouping(selectedValue);
    onViewChange(selectedValue); // Pass the selected value to App.js for view change
  
    // Close the dropdown if both grouping and sorting options are selected
    if (selectedValue === 'status' && currentSorting === 'priority-1') {
      setMenuVisible(false);
    }
  };
  
  const handleSortingChange = (e) => {
    const selectedValue = e.target.value;
  
    setCurrentSorting(selectedValue);
    onSortingChange(selectedValue); // Pass the selected value to App.js for sorting change
  
    // Close the dropdown if both grouping and sorting options are selected
    if (currentGrouping === 'status' && selectedValue === 'priority-1') {
      setMenuVisible(false);
    }
  };
  

  return (
    <div className="navbar">
      <div className="dropdown">
        <div className="display">
          <button onClick={toggleMenu} className="dropbtn">
            <ImEqualizer /> Display <AiOutlineDown />
          </button>
        </div>

        {menuVisible && (
          <div className={`dropdown-content ${menuVisible ? 'show-dropdown' : ''}`}>
            <div className="grouping">
              <label>Grouping</label>
              <select onChange={handleGroupingChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="sorting">
              <label>Ordering</label>
              <select onChange={handleSortingChange}>
                <option value="priority-1">Priority-1</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;


