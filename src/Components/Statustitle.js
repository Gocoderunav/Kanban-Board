import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Status.css';

const Statustitle = () => {
  const [tickets, setTickets] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [backlogCount, setBacklogCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [canceledCount, setCanceledCount] = useState(0);

  useEffect(() => {
    Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((res) => {
        setTickets(res.data.tickets);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    setTodoCount(tickets.filter((ticket) => ticket.status === 'Todo').length);
    setInProgressCount(tickets.filter((ticket) => ticket.status === 'In progress').length);
    setBacklogCount(tickets.filter((ticket) => ticket.status === 'Backlog').length);
    setDoneCount(tickets.filter((ticket) => ticket.status === 'Done').length);
    setCanceledCount(tickets.filter((ticket) => ticket.status === 'Canceled').length);
  }, [tickets]);

  const renderTicketsByStatus = (status, count) => {
    const filteredTickets = tickets.filter((ticket) => ticket.status === status);

    // Sort tickets by title in ascending order
    const sortedTickets = filteredTickets.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });

    return (
      <div key={status} className="status-cards">
        <div className="status-section">
          <h3>{status}</h3>
          <span className="count"><h4>{count}</h4></span>
          {/* Buttons and other elements */}
        
         <span><div classname="side-end">
        
        <button className="plus-button">+</button> {/* Plus button */}
        <button className="dots-button">...</button>
      
      
       
      
      </div></span>
        </div>
        {sortedTickets.map((ticket) => (
          <div className="card" key={ticket.id}>
            {/* Render ticket details */}
            <div className="kanban-card">
              {/* Details for each ticket */}
              <div className="user-profile">
                <img src="user-profile-icon.png" alt="Profile Icon" />
              </div>
              <div className="card-content">
                <div className="title-section">
                  <h3>{ticket.id}</h3>
                  <p>{ticket.title}</p>
                  </div>
                  <div className="feature-request">
                  <button>
                   
                    {ticket.tag}
                  </button>
                </div>
                <div className="dots-container">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="status-column">{renderTicketsByStatus('Backlog', backlogCount)}</div>
      <div className="status-column">{renderTicketsByStatus('Todo', todoCount)}</div>
      <div className="status-column">{renderTicketsByStatus('In progress', inProgressCount)}</div>
      <div className="status-column">{renderTicketsByStatus('Done', doneCount)}</div>
      <div className="status-column">{renderTicketsByStatus('Canceled', canceledCount)}</div>
    </div>
  );
};

export default Statustitle;
