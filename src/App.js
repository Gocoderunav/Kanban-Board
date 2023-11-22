
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Status from './Components/Status';
import User from './Components/User';
import PrioritySort from './Components/PrioritySort';
import StatusPrio from './Components/StatusPrio';
import UserTitle from './Components/Usertitle';
import StatusTitle from './Components/Statustitle';
import Priorsort from './Components/priorSort';
import Priortitle from './Components/Priortitle';
import Priority from './Components/Priority';

function App() {
  const [currentView, setCurrentView] = useState(() => {
    // Get the currentView value from localStorage if available, or default to null
    return localStorage.getItem('currentView') || null;
  });
  const [sortBy, setSortBy] = useState(() => {
    // Get the sortBy value from localStorage if available, or default to null
    return localStorage.getItem('sortBy') || null;
  });

  // Save currentView and sortBy to localStorage when they change
  useEffect(() => {
    localStorage.setItem('currentView', currentView);
  }, [currentView]);

  useEffect(() => {
    localStorage.setItem('sortBy', sortBy);
  }, [sortBy]);

  // Move renderComponent inside the App component
  const renderComponent = () => {
    if (currentView === 'user') {
      if (sortBy === 'priority-1') {
        return <PrioritySort />;
      } else if (sortBy === 'title') {
        return <UserTitle />;
      } else {
        return <User />;
      }
    } else if (currentView === 'status') {
      if (sortBy === 'priority-1') {
        return <StatusPrio />;
      } else if (sortBy === 'title') {
        return <StatusTitle />;
      } else {
        return <Status />;
      }
    } else if (currentView === 'priority') {
      if (sortBy === 'priority-1') {
        return <Priorsort />;
      } else if (sortBy === 'title') {
        return <Priortitle />;
      } else {
        return <Priority />;
      }
    }
    return null;
  };
  const handleViewChange = (view) => {
    // Check if the same view is clicked again, and reset the sortBy value if so
    if (view === currentView) {
      setSortBy(null);
    }
    setCurrentView(view);
  };

  return (
    <div className="App">
      <div className='app_navbar'>
        {/* Pass the functions to the Navbar component */}
        <Navbar onViewChange={handleViewChange} onSortingChange={setSortBy} />
      </div>
      <div className="app_outer">
        <div className='app_boards'>
          {/* Render the component based on logic */}
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;

