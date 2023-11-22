

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Priority.css';

const Priority = () => {
  const [tickets, setTickets] = useState([]);
  const [priorityLabels, setPriorityLabels] = useState({
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  });

  const countTicketsByPriority = (priorityLabel) => {
    const priorityLevel = Object.keys(priorityLabels).find((key) => priorityLabels[key] === priorityLabel);
    return tickets.filter((ticket) => ticket.priority === parseInt(priorityLevel)).length;
  };

  useEffect(() => {
    Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((res) => {
        setTickets(res.data.tickets);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // additional code 
//   const groupTicketsByPriority = () => {
//     const groupedTickets = {};
//     tickets.forEach((ticket) => {
//       const { priority } = ticket;
//       if (!groupedTickets[priority]) {
//         groupedTickets[priority] = [];
//       }
//       groupedTickets[priority].push(ticket);
//     });
//     return Object.keys(groupedTickets).map((priorityLevel) => (
//       <div key={priorityLevel} className="status-cards">
//         <h3>{priorityLabels[priorityLevel]}</h3>
//         {groupedTickets[priorityLevel].map((ticket) => (
//           <div className="card" key={ticket.id}>
//             {/* Render ticket details */}
//           </div>
//         ))}
//       </div>
//     ));
//   };

//   const sortTicketsByPriority = () => {
//     const sortedTickets = [...tickets].sort((a, b) => b.priority - a.priority);
//     return (
//       <div key="priority" className="status-cards">
//         <h3>Priority</h3>
//         {sortedTickets.map((ticket) => (
//           <div className="card" key={ticket.id}>
//             {/* Render ticket details */}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const sortTicketsByTitle = () => {
//     const sortedTickets = [...tickets].sort((a, b) => a.title.localeCompare(b.title));
//     return (
//       <div key="title" className="status-cards">
//         <h3>Title</h3>
//         {sortedTickets.map((ticket) => (
//           <div className="card" key={ticket.id}>
//             {/* Render ticket details */}
//           </div>
//         ))}
//       </div>
//     );
//   };
  // code ends here 

  const renderTicketsByPriority = (priorityLabel, count) => {
    const priorityLevel = Object.keys(priorityLabels).find((key) => priorityLabels[key] === priorityLabel);
    const filteredTickets = tickets.filter((ticket) => ticket.priority === parseInt(priorityLevel));
    return (
      <div key={priorityLabel} className="status-cards">
        <div className="status-section">
          <h3>{priorityLabel}</h3>
          <span className="count">
            <h4>{count}</h4>
          </span>
          <span>
            <div className="side-end">
              <button className="plus-button">+</button> {/* Plus button */}
              <button className="dots-button">...</button>
            </div>
          </span>
        </div>

        {filteredTickets.map((ticket) => (
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
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      {Object.values(priorityLabels).map((priorityLabel) => (
        <div key={priorityLabel} className="status-column">
          {renderTicketsByPriority(priorityLabel, countTicketsByPriority(priorityLabel))}
        </div>
      ))}
    </div>
  );
};

export default Priority;