import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Status.css';

const StatusPrio = () => {
  const [tickets, setTickets] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  // ... (other count states)
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


  const countTicketsByStatus = (status) => {
    return tickets.filter((ticket) => ticket.status === status).length;
  };

  const renderTicketsByStatus = (status, count) => {
    let filteredTickets = tickets.filter((ticket) => ticket.status === status);

    // Define the priority order
    const priorityOrder = {
      Urgent: 4,
      High: 3,
      Medium: 2,
      Low: 1,
      'No priority': 0,
    };

    // Sort tickets based on priority levels
    filteredTickets = filteredTickets.sort((a, b) => {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    return (
      <div key={status} className="status-cards">
        <div className="status-section">
          {/* ... (existing JSX code remains the same) */}
          <h3>
         {status}</h3>
         <span className="count"><h4>{count}</h4></span> 
         <span><div classname="side-end">
        
        <button className="plus-button">+</button> {/* Plus button */}
        <button className="dots-button">...</button>
      
      
       
      
      </div></span>
        </div>
        

        {filteredTickets.map((ticket) => (
          <div className="card" key={ticket.id}>
            {/* Render ticket details */}
            <div className="kanban-card">
              {/* Your ticket rendering JSX */}
              {/* Example: */}
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

  useEffect(() => {
    setTodoCount(countTicketsByStatus('Todo'));
    // ... (other status count updates)
  }, [tickets]);

  return (
    <div className="container">
      <div className="status-column">{renderTicketsByStatus('Backlog', countTicketsByStatus('Backlog'))}</div>
      <div className="status-column">{renderTicketsByStatus('Todo', todoCount)}</div>
      {/* Render other status columns as needed */}
      <div className="status-column">{renderTicketsByStatus('In progress', inProgressCount)}</div>
      <div className="status-column">{renderTicketsByStatus('Done', doneCount)}</div>
      <div className="status-column">{renderTicketsByStatus('Canceled', canceledCount)}</div>
    </div>
    
  );
};

export default StatusPrio;
