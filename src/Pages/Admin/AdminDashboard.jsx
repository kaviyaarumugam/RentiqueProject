import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import { FaBars, FaBell, FaUserCircle, FaChevronDown, FaSignOutAlt } from 'react-icons/fa';

const AdminDashboard = ({ children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="adminDashboard">
      <aside className="adminSidebar">
        <div className="adminSidebarHeader">
          <div className="adminLogo">Admin</div>
          <p className="adminWelcomeText">Welcome, Kaviya</p>
        </div>
        <ul className="adminSidebarMenu">
          <li className="adminMenuItem"><Link to ="/admin/home">Home</Link></li>
          <li className="adminMenuItem">Forms</li>
          <li className="adminMenuItem" onClick={toggleDropdown}>
            Categories
            <FaChevronDown className={`adminDropdownArrow ${isDropdownOpen ? 'open' : ''}`} />
            <ul className={`adminSubMenu ${isDropdownOpen ? 'show' : ''}`}>
              <li className="adminSubMenuItem"><Link to='/admin/men'>Men</Link></li>
              <li className="adminSubMenuItem"><Link to='/admin/women'>Women</Link></li>
              <li className="adminSubMenuItem"><Link to='/admin/bridesmaid'>Bridesmaid</Link></li>
              <li className="adminSubMenuItem"><Link to='/admin/groomsmen'>Groomsmen</Link></li>
              <li className="adminSubMenuItem"><Link to='/admin/exclusives'>Exclusives</Link></li>
            </ul>
          </li>
        </ul>
        <div className="adminLogout">
          <Link to="/login">
            <FaSignOutAlt className="adminLogoutIcon" />
            <span className="adminLogoutText">Logout</span>
          </Link>
        </div>

      </aside>

      <div className="adminMainContent">
        <header className="adminHeader">
          {/* <div className="adminHamburgerMenu">
            <FaBars />
          </div> */}
          <div className="adminHeaderRight">
            <FaBell className="adminIcon" />
            <FaUserCircle className="adminIcon" />
            <span className="adminUserName">Kaviya A</span>
          </div>
        </header>
        <div className="adminContent">
          {children}
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;



// import React from 'react';
// import './AdminDashboard.css';
// import { FaBars } from 'react-icons/fa'; // For the hamburger menu icon
// import { FaBell, FaUserCircle } from 'react-icons/fa'; // For the notification and user icons

// const AdminDashboard = () => {
//   return (
//     <div className="adminDashboard">
//       <aside className="adminSidebar">
//         <div className="adminSidebarHeader">
//           <div className="adminLogo">Admin</div>
//           <p className="adminWelcomeText">Welcome, Kaviya</p>
//         </div>
//         <ul className="adminSidebarMenu">
//           <li className="adminMenuItem">Home</li>
//           <li className="adminMenuItem">Forms</li>
//           <li className="adminMenuItem">Categories</li>

//         </ul>
//       </aside>

//       <div className="adminMainContent">
//         <header className="adminHeader">
//           <div className="adminHamburgerMenu">
//             <FaBars />
//           </div>
//           <div className="adminHeaderRight">
//             <FaBell className="adminIcon" />
//             <FaUserCircle className="adminIcon" />
//             <span className="adminUserName">Kaviya A</span>
//           </div>
//         </header>
//         <div className="adminContent">
//           <h1>Admin Dashboard</h1>
//           {/* Content goes here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;





// import React from 'react';
// import './AdminDashboard.css';
// import { FaUsers, FaTshirt, FaShoppingCart, FaSearch, FaSignOutAlt } from 'react-icons/fa';

// const AdminDashboard = () => {
//     return (
//         <div className="dashboard">
//             <aside className="sidebar">
//                 <nav>
//                     <ul>
//                         <li className="tooltip"><FaUsers className="icon"/><span className="tooltiptext">Customers</span></li>
//                         <li className="tooltip"><FaTshirt className="icon"/><span className="tooltiptext">Inventory</span></li>
//                         <li className="tooltip"><FaShoppingCart className="icon"/><span className="tooltiptext">Orders</span></li>
//                     </ul>
//                 </nav>
//                 <button className="logout"><FaSignOutAlt className="icon"/></button>
//             </aside>
//             <main className="main-content">
//                 <header className="header">
//                     <h1>Admin Dashboard</h1>
//                     <div className="header-right">
//                         {/* <div className="search-bar">
//                             <FaSearch className="search-icon" />
//                             <input type="text" placeholder="Search..." />
//                         </div> */}
//                         <div className="user-profile">
//                             <img src="https://via.placeholder.com/40" alt="User"/>
//                             <div className="user-dropdown">
//                                 <p>Profile</p>
//                                 <p>Settings</p>
//                                 <p>Logout</p>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
//                 <section className="statistics">
//                     <div className="stat-card gradient-card">
//                         <h2>500+</h2>
//                         <p>Customers</p>
//                     </div>
//                     <div className="stat-card gradient-card">
//                         <h2>200+</h2>
//                         <p>Items Available</p>
//                     </div>
//                     <div className="stat-card gradient-card">
//                         <h2>150+</h2>
//                         <p>Orders Processed</p>
//                     </div>
//                 </section>
//                 {/* <section className="recent-activities">
//                     <h2>Recent Activities</h2>
//                     <ul>
//                         <li><FaUsers className="icon"/> New Customer added: Jane Doe</li>
//                         <li><FaShoppingCart className="icon"/> Order #12345 placed: 3 items</li>
//                         <li><FaTshirt className="icon"/> Inventory updated: 10 new dresses added</li>
//                     </ul>
//                 </section> */}
//             </main>
//         </div>
//     );
// };

// export default AdminDashboard;
