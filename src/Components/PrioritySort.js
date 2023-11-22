import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './User.css';

const Listing = () => {
  const [tickets, setTickets] = useState([]);
  const [userNames, setUserNames] = useState({});

  const countTicketsByUserName = (userName) => {
    return tickets.filter((ticket) => ticket.userId === userNames[userName]).length;
  };

  useEffect(() => {
    Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((res) => {
        setTickets(res.data.tickets);

        // Extracting user IDs and corresponding names from the API
        const usersData = res.data.users;
        const tempUserNames = {};
        usersData.forEach((user) => {
          tempUserNames[user.name] = user.id;
        });
        setUserNames(tempUserNames);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderTicketsByUserName = (userName, count) => {
    const filteredTicketsByUser = tickets.filter((ticket) => ticket.userId === userNames[userName]);

    // Group tickets by priority
    const priorityGroups = {
      4: [],
      3: [],
      2: [],
      1: [],
      0: [],
    };

    filteredTicketsByUser.forEach((ticket) => {
      priorityGroups[ticket.priority].push(ticket);
    });

    return (
      <div key={userName} className="status-cards">
        <div className="status-section">
          {/* <h3>{userName}</h3> */}
          <h3><img src="user-profile-icon.png" />{userName}</h3>
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

        {/* Render tickets by priority */}
        {Object.keys(priorityGroups)
          .reverse() // To display tickets in descending priority order
          .map((priorityLevel) => (
            <div key={priorityLevel}>
              {/* <h3>
                {priorityLevel === '4'
                  ? 'Urgent'
                  : priorityLevel === '3'
                  ? 'High'
                  : priorityLevel === '2'
                  ? 'Medium'
                  : priorityLevel === '1'
                  ? 'Low'
                  : 'No Priority'}
              </h3> */}
              {priorityGroups[priorityLevel].map((ticket) => (
                <div className="card" key={ticket.id}>
                  {/* Render ticket details */}
                  <div className="kanban-card">
                    {/* <div className="user-profile">
                      <img src="user-profile-icon.png" alt="Profile Icon" />
                    </div> */}
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
          ))}
      </div>
    );
  };

  return (
    <div className="container">
      {Object.keys(userNames).map((userName) => (
        <div key={userName} className="status-column">
          {renderTicketsByUserName(userName, countTicketsByUserName(userName))}
        </div>
      ))}
    </div>
  );
};

export default Listing;

