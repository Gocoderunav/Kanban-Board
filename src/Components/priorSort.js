import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Priority.css';

const Priorsort = () => {
  const [tickets, setTickets] = useState([]);
  const [priorityLabels, setPriorityLabels] = useState({
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  });

  useEffect(() => {
    Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((res) => {
        setTickets(res.data.tickets);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sortTicketsByPriority = (priorityLevel) => {
    const filteredTickets = tickets.filter(
      (ticket) => ticket.priority === priorityLevel
    );
    return filteredTickets.map((ticket) => (
      <div className="card" key={ticket.id}>
        {/* Render ticket details */}
        <div className="kanban-card">
          <div className="user-profile">
            <img src="user-profile-icon.png" alt="Profile Icon" />
          </div>
          <div className="card-content">
            <div className="title-section">
              <h3>{ticket.id}</h3>
              <p>{ticket.title}</p>
            </div>
            <div className="feature-request">
              <button>{ticket.tag}</button>
            </div>
            <div className="dots-container">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      {Object.keys(priorityLabels)
        .sort((a, b) => b - a) // Sort priority levels in descending order
        .map((priorityLevel) => (
          <div key={priorityLevel} className="status-cards">
            <div className="status-section">
              <h3>{priorityLabels[priorityLevel]}</h3>
              <span className="count">
                <h4>
                  {tickets.filter(
                    (ticket) => ticket.priority === parseInt(priorityLevel)
                  ).length}{' '}
                 
                </h4>
              </span>
              <span>
                <div className="side-end">
                  <button className="plus-button">+</button>
                  <button className="dots-button">...</button>
                </div>
              </span>
            </div>
            {sortTicketsByPriority(parseInt(priorityLevel))}
          </div>
        ))}
    </div>
  );
};

export default Priorsort;
