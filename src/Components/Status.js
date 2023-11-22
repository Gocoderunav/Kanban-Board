// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';

// import './Status.css';

// const Status = () => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // Filter tickets based on status
//   const backlogTickets = tickets.filter((ticket) => ticket.status === 'Backlog');
//   const todoTickets = tickets.filter((ticket) => ticket.status === 'Todo');
//   const inProgressTickets = tickets.filter((ticket) => ticket.status === 'In progress');
//   const doneTickets = tickets.filter((ticket) => ticket.status === 'Done');
//   const canceledTickets = tickets.filter((ticket) => ticket.status === 'Canceled');

//   return (
//     <>
//       <div>
//         <div className="container">
//           <div className="profile">
//             <div className="image"></div>
//             <div className="cam">
//               <h2>
//                 {backlogTickets.map((ticket) => (
//                   <span key={ticket.id}>{ticket.id}</span>
//                 ))}
//               </h2>
//             </div>
//             <div className="title">
//               {backlogTickets.map((ticket) => (
//                 <p key={ticket.id}>{ticket.title}</p>
//               ))}
//             </div>
//             <div className="centre-box">
//               <div className="image1"></div>
//               {backlogTickets.map((ticket) => (
//                 <span key={ticket.id}>{ticket.tag}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Similar sections for other ticket statuses */}
//     </>
//   );
// };

// export default Status;
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';

// import './Status.css';

// const Status = () => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const renderTicketsByStatus = (status) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//       <div key={status}>
//         <h2>{status}</h2>
//         {filteredTickets.map((ticket) => (
//           <div className="" key={ticket.id}>
//             <h3>{ticket.title}</h3>
//             {/* Render other ticket details */}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="profile">
//         <div className="image"></div>
//         <div className="content">
//             {renderTicketsByStatus('Backlog')}
//           {renderTicketsByStatus('Todo')}
//           {renderTicketsByStatus('In progress')}
//           {renderTicketsByStatus('Done')}
//           {renderTicketsByStatus('Canceled')} 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Status;

// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';

// import './Status.css';

// const Status = () => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const renderTicketsByStatus = (status) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//       <div key={status} className="status-section">
//         <h2>{status}</h2>
//         <div className="status-cards">
//           {filteredTickets.map((ticket) => (
//             <div className="card" key={ticket.id}>
//               <h3>{ticket.title}</h3>
//               {/* Render other ticket details */}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//     <div className="container">
//       <div className="profile">
//         <div className="image"></div>
        

//         <div className="cam">
//           <h2>{ticket.id}</h2> //here what is mentioned in id of tickets should be here
//         </div>
       
//         <div className="title">
//           <p>{tickets.title}  </p>//here what is mentioned in title of tickets should be here
//         </div>
//         <div className="centre-box">
//           <div className="image1"></div>//here what is mentioned in tag of tickets should be here
          
          
//           <span>{tickets.tag}</span>
        
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Status;
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';

// const Status = () => {
//   const [tickets, setTickets] = useState([]);
//   const [todoCount, setTodoCount] = useState(0);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     const todoTickets = tickets.filter((ticket) => ticket.status === 'Todo');
//     setTodoCount(todoTickets.length);
//   }, [tickets]);

//   const renderTicketsByStatus = (status) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//         <div classname="start">
//       <div key={status} className="status-section">
//         <h2>{status}</h2>
//         <div className="status-cards">
//           {filteredTickets.map((ticket) => (
//             <div className="card" key={ticket.id}>
//              <div className="container">
//         <div className="profile">
//           <div className="image"></div>
          
 
//           <div className="cam">
//             <h2>{ticket.id}</h2>
//           </div>
         
//           <div className="title">
//             <p>{ticket.title}</p>
//           </div>
//           <div className="centre-box">
//             <div className="image1"></div>
            
            
//             <span>{ticket.tag}</span>
          
//           </div>
//         </div>
//       </div>
//             </div>
//           ))}
//         </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="container">
     
//         <div className="content">
//         {renderTicketsByStatus('Backlog')}
//           {renderTicketsByStatus('Todo')}
//           {renderTicketsByStatus('In progress')}
//           {renderTicketsByStatus('Done')}
//           {renderTicketsByStatus('Canceled')}
//         </div>
        
//       </div>
    
//   );
// };

// export default Status;

// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';

// const Status = () => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const renderTicketsByStatus = (status) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (<>
//       <div key={status} className="status-section">
//         <h2>{status}</h2>
//         </div>
//         <div className="status-cards">
//           {filteredTickets.map((ticket) => (
//             <div className="card" key={ticket.id}>
//               <div className="container">
//                 <div className="profile">
//                   <div className="image"></div>
//                   <div className="cam">
//                     <h2>{ticket.id}</h2>
//                   </div>
//                   <div className="title">
//                     <p>{ticket.title}</p>
//                   </div>
//                   <div className="centre-box">
//                     <div className="image1"></div>
//                     <span>{ticket.tag}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//        </div>
     
//    </> );
//   };

//   return (
//     <div className="container">
//       <div className="column">
//         {renderTicketsByStatus('Backlog')}
//       </div>
//       <div className="column">
//         {renderTicketsByStatus('Todo')}
//       </div>
//       <div className="column">
//         {renderTicketsByStatus('In progress')}
//       </div>
//       <div className="column">
//         {renderTicketsByStatus('Done')}
//       </div>
//       <div className="column">
//         {renderTicketsByStatus('Canceled')}
//       </div>
//     </div>
//   );
// };

// export default Status;
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';

// const Status = () => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const renderTicketsByStatus = (status) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (<>
        
//         <div className="status-cards">
//         <div key={status} className="status-section">
//         <h2>{status}</h2>
//         </div>
//           {filteredTickets.map((ticket) => (
//             <div className="card" key={ticket.id}>
             
//               <div className="container">
             
//                 <div className="profile">
//                   <div className="image"></div>
//                   <div className="cam">
//                     <h2>{ticket.id}</h2>
//                   </div>
//                   <div className="title">
//                     <p>{ticket.title}</p>
//                   </div>
//                   <div className="centre-box">
//                     <div className="image1"></div>
//                     <span>{ticket.tag}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
      
//    </> );
//   };

//   return (
//     <div className="container">
//       <div className="status-column">
//         {renderTicketsByStatus('Backlog')}
//       </div>
//       <div className="status-column">
//         {renderTicketsByStatus('Todo')}
//       </div>
//       <div className="status-column">
//         {renderTicketsByStatus('In progress')}
//       </div>
//       <div className="status-column">
//         {renderTicketsByStatus('Done')}
//       </div>
//       <div className="status-column">
//         {renderTicketsByStatus('Canceled')}
//       </div>
//     </div>
//   );
// };

// export default Status;
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';

// const Status = () => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const renderTicketsByStatus = (status) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (<>
        
//         <div className="status-cards">
//         <div key={status} className="status-section">
//         <h2>{status}</h2>
//         </div>
//           {filteredTickets.map((ticket) => (
//             <div className="card" key={ticket.id}>
             
//               <div className="container">
             
//                 <div className="profile">
//                   <div className="image"></div>
//                   <div className="cam">
//                     <h2>{ticket.id}</h2>
//                   </div>
//                   <div className="title">
//                     <p>{ticket.title}</p>
//                   </div>
//                   <div className="centre-box">
//                     <div className="image1"></div>
//                     <span>{ticket.tag}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
      
//    </> );
//   };

//   return (
//     <div className="container">
//       <div className="status-column">
//         {renderTicketsByStatus('Backlog')}
//       </div>
//       <div className="status-column">
//         {renderTicketsByStatus('Todo')}
//       </div>
//       <div className="status-column">
//         {renderTicketsByStatus('In progress')}
//       </div>
//       <div className="status-column">
//         {renderTicketsByStatus('Done')}
//       </div>
//       <div className="status-column">
//         {renderTicketsByStatus('Canceled')}
//       </div>
//     </div>
//   );
// };

// export default Status;
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';

// const Status = () => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const renderTicketsByStatus = (status) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//       <div key={status} className="status-cards">
//         <div className="status-section">
//           <h2>{status}</h2>
        
//         {filteredTickets.map((ticket) => (
//           <div className="card" key={ticket.id}>
//             <div className="kanban-card">
//               <div className="user-profile">
//                 <img src="user-profile-icon.png" alt="Profile Icon" />
//               </div>
//               <div className="card-content">
//                 <div className="title-section">
//                   <h3>{ticket.id}</h3>
//                   <p>{ticket.title}</p>
//                 </div>
//                 <div className="feature-request">
//                   <button>
//                     {/* Display ticket tag or any other info */}
//                     {ticket.tag}
//                   </button>
//                 </div>
//                 <div className="dots-container">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="status-column">{renderTicketsByStatus('Backlog')}</div>
//       <div className="status-column">{renderTicketsByStatus('Todo')}</div>
//       <div className="status-column">{renderTicketsByStatus('In progress')}</div>
//       <div className="status-column">{renderTicketsByStatus('Done')}</div>
//       <div className="status-column">{renderTicketsByStatus('Canceled')}</div>
//     </div>
//   );
// };

// export default Status;

// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';

// const Status = () => {
//     const [tickets, setTickets] = useState([]);
//     const [todoCount, setTodoCount] = useState(0);
//     const [inProgressCount, setInProgressCount] = useState(0);
//     const [backlogCount, setBacklogCount] = useState(0);
//     const [doneCount, setDoneCount] = useState(0);
//     const [canceledCount, setCanceledCount] = useState(0);
  
//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     setTodoCount(tickets.filter((ticket) => ticket.status === 'Todo').length);
//     setInProgressCount(tickets.filter((ticket) => ticket.status === 'In progress').length);
//     setBacklogCount(tickets.filter((ticket) => ticket.status === 'Backlog').length);
//     setDoneCount(tickets.filter((ticket) => ticket.status === 'Done').length);
//     setCanceledCount(tickets.filter((ticket) => ticket.status === 'Canceled').length);
//   }, [tickets]);
  

//   const renderTicketsByStatus = (status,count) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//       <div key={status} className="status-cards">
//         <div className="status-section">
//           <h2>{status} </h2>
//           <span>{count}</span>
//         {filteredTickets.map((ticket) => (
//           <div className="card" key={ticket.id}>
//             <div className="kanban-card">
//               <div className="user-profile">
//                 <img src="user-profile-icon.png" alt="Profile Icon" />
//               </div>
//               <div className="card-content">
//                 <div className="title-section">
//                   <h3>{ticket.id}</h3>
//                   <p>{ticket.title}</p>
//                 </div>
//                 <div className="feature-request">
//                   <button>
//                     {/* Display ticket tag or any other info */}
//                     {ticket.tag}
//                   </button>
//                 </div>
//                 <div className="dots-container">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="status-column">{renderTicketsByStatus('Backlog')}</div>
//       <div className="status-column">{renderTicketsByStatus('Todo')}</div>
//       <div className="status-column">{renderTicketsByStatus('In progress')}</div>
//       <div className="status-column">{renderTicketsByStatus('Done')}</div>
//       <div className="status-column">{renderTicketsByStatus('Canceled')}</div>
//     </div>
//   );
// };

// export default Status;

// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';

// const Status = () => {
//   const [tickets, setTickets] = useState([]);
//   const [todoCount, setTodoCount] = useState(0);
//   const [inProgressCount, setInProgressCount] = useState(0);
//   const [backlogCount, setBacklogCount] = useState(0);
//   const [doneCount, setDoneCount] = useState(0);
//   const [canceledCount, setCanceledCount] = useState(0);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     setTodoCount(tickets.filter((ticket) => ticket.status === 'Todo').length);
//     setInProgressCount(tickets.filter((ticket) => ticket.status === 'In progress').length);
//     setBacklogCount(tickets.filter((ticket) => ticket.status === 'Backlog').length);
//     setDoneCount(tickets.filter((ticket) => ticket.status === 'Done').length);
//     setCanceledCount(tickets.filter((ticket) => ticket.status === 'Canceled').length);
//   }, [tickets]);

//   const renderTicketsByStatus = (status, count) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//       <div key={status} className="status-cards">
//         <div className="status-section">
//         <h2>
//          {status}
//           <span className="count">{count}</span>
//         </h2>

          
//         </div>
//         {filteredTickets.map((ticket) => (
//           <div className="card" key={ticket.id}>
//             {/* Render ticket details */}
//             <div className="kanban-card">
//               <div className="user-profile">
//                 <img src="user-profile-icon.png" alt="Profile Icon" />
//               </div>
//               <div className="card-content">
//                 <div className="title-section">
//                   <h3>{ticket.id}</h3>
//                   <p>{ticket.title}</p>
//                 </div>
//                 <div className="feature-request">
//                   <button>
//                     {/* Display ticket tag or any other info */}
//                     {ticket.tag}
//                   </button>
//                 </div>
//                 <div className="dots-container">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="status-column">{renderTicketsByStatus('Backlog', backlogCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Todo', todoCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('In progress', inProgressCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Done', doneCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Canceled', canceledCount)}</div>
//     </div>
//   );
// };

// export default Status;

// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';


// const Status = () => {
//   const [tickets, setTickets] = useState([]);
//   const [todoCount, setTodoCount] = useState(0);
//   const [inProgressCount, setInProgressCount] = useState(0);
//   const [backlogCount, setBacklogCount] = useState(0);
//   const [doneCount, setDoneCount] = useState(0);
//   const [canceledCount, setCanceledCount] = useState(0);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     setTodoCount(tickets.filter((ticket) => ticket.status === 'Todo').length);
//     setInProgressCount(tickets.filter((ticket) => ticket.status === 'In progress').length);
//     setBacklogCount(tickets.filter((ticket) => ticket.status === 'Backlog').length);
//     setDoneCount(tickets.filter((ticket) => ticket.status === 'Done').length);
//     setCanceledCount(tickets.filter((ticket) => ticket.status === 'Canceled').length);
//   }, [tickets]);



  


//   const renderTicketsByStatus = (status, count) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//       <div key={status} className="status-cards">
//         <div className="status-section">
//         <h2>
//          {status}
//           <span className="count">{count}</span>
//         </h2>

          
//         </div>
//         {filteredTickets.map((ticket) => (
//           <div className="card" key={ticket.id}>
//             {/* Render ticket details */}
//             <div className="kanban-card">
//               <div className="user-profile">
//                 <img src="user-profile-icon.png" alt="Profile Icon" />
//               </div>
//               <div className="card-content">
//                 <div className="title-section">
//                   <h3>{ticket.id}</h3>
//                   <p>{ticket.title}</p>
//                 </div>
//                 <div className="feature-request">
//                   <button>
//                     {/* Display ticket tag or any other info */}
//                     {ticket.tag}
//                   </button>
//                 </div>
//                 <div className="dots-container">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="status-column">{renderTicketsByStatus('Backlog', backlogCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Todo', todoCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('In progress', inProgressCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Done', doneCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Canceled', canceledCount)}</div>
//     </div>
//   );
// };

// export default Status;
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';


// const Status = () => {
//   const [tickets, setTickets] = useState([]);
//   const [todoCount, setTodoCount] = useState(0);
//   const [inProgressCount, setInProgressCount] = useState(0);
//   const [backlogCount, setBacklogCount] = useState(0);
//   const [doneCount, setDoneCount] = useState(0);
//   const [canceledCount, setCanceledCount] = useState(0);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     setTodoCount(tickets.filter((ticket) => ticket.status === 'Todo').length);
//     setInProgressCount(tickets.filter((ticket) => ticket.status === 'In progress').length);
//     setBacklogCount(tickets.filter((ticket) => ticket.status === 'Backlog').length);
//     setDoneCount(tickets.filter((ticket) => ticket.status === 'Done').length);
//     setCanceledCount(tickets.filter((ticket) => ticket.status === 'Canceled').length);
//   }, [tickets]);



  


//   const renderTicketsByStatus = (status, count) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//       <div key={status} className="status-cards">
//         < div className="status-section">
//         <h3>
//          {status}</h3>
//          <span className="count"><h4>{count}</h4></span> 
//          <span><div classname="side-end">
        
//         <button className="plus-button">+</button> {/* Plus button */}
//         <button className="dots-button">...</button>
      
      
       
      
//       </div></span>
//         </div>
        
//         {filteredTickets.map((ticket) => (
//           <div className="card" key={ticket.id}>
//             {/* Render ticket details */}
//             <div className="kanban-card">
//               <div className="user-profile">
//                 <img src="user-profile-icon.png" alt="Profile Icon" />
//               </div>
//               <div className="card-content">
//                 <div className="title-section">
//                   <h3>{ticket.id}</h3>
//                   <p>{ticket.title}</p>
//                 </div>
//                 <div className="feature-request">
//                   <button>
//                     {/* Display ticket tag or any other info */}
//                     {ticket.tag}
//                   </button>
//                 </div>
//                 <div className="dots-container">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
      
//       </div>
     
//     );
//   };

//   return (
//     <div className="container">
//       <div className="status-column">{renderTicketsByStatus('Backlog', backlogCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Todo', todoCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('In progress', inProgressCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Done', doneCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Canceled', canceledCount)}</div>
//     </div>
//   );
// };

// export default Status;
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';


// const Status = () => {
//   const [tickets, setTickets] = useState([]);
//   const [todoCount, setTodoCount] = useState(0);
//   const [inProgressCount, setInProgressCount] = useState(0);
//   const [backlogCount, setBacklogCount] = useState(0);
//   const [doneCount, setDoneCount] = useState(0);
//   const [canceledCount, setCanceledCount] = useState(0);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     setTodoCount(tickets.filter((ticket) => ticket.status === 'Todo').length);
//     setInProgressCount(tickets.filter((ticket) => ticket.status === 'In progress').length);
//     setBacklogCount(tickets.filter((ticket) => ticket.status === 'Backlog').length);
//     setDoneCount(tickets.filter((ticket) => ticket.status === 'Done').length);
//     setCanceledCount(tickets.filter((ticket) => ticket.status === 'Canceled').length);
//   }, [tickets]);



  


//   const renderTicketsByStatus = (status, count) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//       <div key={status} className="status-cards">
//         < div className="status-section">
//         <h3>
//          {status}</h3>
//          <span className="count"><h4>{count}</h4></span> 
//          <span><div classname="side-end">
        
//         <button className="plus-button">+</button> {/* Plus button */}
//         <button className="dots-button">...</button>
      
      
       
      
//       </div></span>
//         </div>
        
//         {filteredTickets.map((ticket) => (
//           <div className="card" key={ticket.id}>
//             {/* Render ticket details */}
//             <div className="kanban-card">
//               <div className="user-profile">
//                 <img src="user-profile-icon.png" alt="Profile Icon" />
//               </div>
//               <div className="card-content">
//                 <div className="title-section">
//                   <h3>{ticket.id}</h3>
//                   <p>{ticket.title}</p>
//                 </div>
//                 <div className="feature-request">
//                   <button>
//                     {/* Display ticket tag or any other info */}
//                     {ticket.tag}
//                   </button>
//                 </div>
//                 <div className="dots-container">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
      
//       </div>
     
//     );
//   };

//   return (
//     <div className="container">
//       <div className="status-column">{renderTicketsByStatus('Backlog', backlogCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Todo', todoCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('In progress', inProgressCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Done', doneCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Canceled', canceledCount)}</div>
//     </div>
//   );
// };

// export default Status;

// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import './Status.css';


// const Status = () => {
//   const [tickets, setTickets] = useState([]);
//   const [todoCount, setTodoCount] = useState(0);
//   const [inProgressCount, setInProgressCount] = useState(0);
//   const [backlogCount, setBacklogCount] = useState(0);
//   const [doneCount, setDoneCount] = useState(0);
//   const [canceledCount, setCanceledCount] = useState(0);

//   useEffect(() => {
//     Axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then((res) => {
//         setTickets(res.data.tickets);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // additional code
// //   const sortTicketsByPriority = () => {
// //     const sortedTickets = [...tickets].sort((a, b) => b.priority - a.priority);
// //     return (
// //       <div key="priority" className="status-cards">
// //         <h3>Priority</h3>
// //         {sortedTickets.map((ticket) => (
// //           <div className="card" key={ticket.id}>
// //             {/* Render ticket details */}
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };
// //   //by title
// //   const sortTicketsByTitle = () => {
// //     const sortedTickets = [...tickets].sort((a, b) => a.title.localeCompare(b.title));
// //     return (
// //       <div key="title" className="status-cards">
// //         <h3>Title</h3>
// //         {sortedTickets.map((ticket) => (
// //           <div className="card" key={ticket.id}>
// //             {/* Render ticket details */}
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };
//   // code ends(additionally)

//   useEffect(() => {
//     setTodoCount(tickets.filter((ticket) => ticket.status === 'Todo').length);
//     setInProgressCount(tickets.filter((ticket) => ticket.status === 'In progress').length);
//     setBacklogCount(tickets.filter((ticket) => ticket.status === 'Backlog').length);
//     setDoneCount(tickets.filter((ticket) => ticket.status === 'Done').length);
//     setCanceledCount(tickets.filter((ticket) => ticket.status === 'Canceled').length);
//   }, [tickets]);



  


//   const renderTicketsByStatus = (status, count) => {
//     const filteredTickets = tickets.filter((ticket) => ticket.status === status);
//     return (
//       <div key={status} className="status-cards">
//         < div className="status-section">
//         <h3>
//          {status}</h3>
//          <span className="count"><h4>{count}</h4></span> 
//          <span><div classname="side-end">
        
//         <button className="plus-button">+</button> {/* Plus button */}
//         <button className="dots-button">...</button>
      
      
       
      
//       </div></span>
//         </div>
        
//         {filteredTickets.map((ticket) => (
//           <div className="card" key={ticket.id}>
//             {/* Render ticket details */}
//             <div className="kanban-card">
//               <div className="user-profile">
//                 <img src="user-profile-icon.png" alt="Profile Icon" />
//               </div>
//               <div className="card-content">
//                 <div className="title-section">
//                   <h3>{ticket.id}</h3>
//                   <p>{ticket.title}</p>
//                 </div>
//                 <div className="feature-request">
//                   <button>
//                     {/* Display ticket tag or any other info */}
//                     {ticket.tag}
//                   </button>
//                 </div>
//                 <div className="dots-container">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
      
//       </div>
     
//     );
//   };

//   return (
//     <div className="container">
//       <div className="status-column">{renderTicketsByStatus('Backlog', backlogCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Todo', todoCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('In progress', inProgressCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Done', doneCount)}</div>
//       <div className="status-column">{renderTicketsByStatus('Canceled', canceledCount)}</div>
//     </div>
//   );
// };

// export default Status;

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Status.css';


const Status = () => {
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
    return (
      <div key={status} className="status-cards">
        < div className="status-section">
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

export default Status;