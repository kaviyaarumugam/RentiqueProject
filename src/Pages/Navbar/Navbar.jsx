import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Rentique-logo.png';
import { FaRegUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";

const Navbar = ({ onSearch, cartItemCount, wishlistItemCount }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [email, setEmail] = useState(null); // State for email
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Read email from localStorage
        const storedEmail = localStorage.getItem('email');
        console.log('Email retrieved from localStorage:', storedEmail); // Debugging
        setEmail(storedEmail);
    }, []);

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term);

        if (term.toLowerCase().includes('suit')) {
            navigate('/men', { state: { searchTerm: term } });
        } else if (term.toLowerCase().includes('saree')) {
            navigate('/women', { state: { searchTerm: term } });
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setDropdownOpen(false);
    };

    const handleCategoryClick = (category) => {
        navigate('/products', { state: { category } });
    };

    const handleLogout = () => {
        localStorage.removeItem('email');
        setEmail(null);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className='navbar'>
            <Link to="/">
                <img src={logo} alt="Logo" className='logo' />
            </Link>
            <ul className='links'>
                <li><Link to="/men">MEN</Link></li>
                <li><Link to="/women">WOMEN</Link></li>
                <li><Link to="/sell-with-us">SELL WITH US</Link></li>
                {/* <li><Link to="/charity">CHIC FOR CHARITY</Link></li> */}
            </ul>
            <div className='search-box'>
                <input 
                    type="text" 
                    placeholder='Search' 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    aria-label="Search"
                />
                <FiSearch className='search-icon'/>
            </div>
            {/* <div className='navbar-icon-container'>
                <Link to="/wishlist">
                    <FaHeart className='navbar-icons' />
                    {wishlistItemCount > 0 && (
                        <span className='badge'>{wishlistItemCount}</span>
                    )}
                </Link>
            </div> */}
            <div className='navbar-icon-container'>
                <Link to="/cart">
                    <FaShoppingCart className='navbar-icons' />
                    {cartItemCount > 0 && (
                        <span className='badge'>{cartItemCount}</span>
                    )}
                </Link>
            </div>
            <div ref={dropdownRef} className='dropdown-container'>
                <FaRegUser className='navbar-icons' onClick={toggleDropdown} />
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <ul>
                        {email ? (
                                <>
                                    <li>Welcome</li>
                                    <li onClick={handleLogout}>Logout</li>
                                </>
                            ) : (
                                <li onClick={() => handleNavigation('/login')}>Login/SignUp</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../../assets/Rentique-logo.png';
// import { FaRegUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
// import { FiSearch } from "react-icons/fi";

// const Navbar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const [email, setEmail] = useState(null); // State for email
//     const dropdownRef = useRef(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Read email from localStorage
//         const storedEmail = localStorage.getItem('email');
//         console.log('Email retrieved from localStorage:', storedEmail); // Debugging
//         setEmail(storedEmail);
//     }, []);

//     const handleSearchChange = (event) => {
//         const term = event.target.value;
//         setSearchTerm(term);
//         onSearch(term);

//         if (term.toLowerCase().includes('suit')) {
//             navigate('/men', { state: { searchTerm: term } });
//         } else if (term.toLowerCase().includes('saree')) {
//             navigate('/women', { state: { searchTerm: term } });
//         }
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(prev => !prev);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setDropdownOpen(false);
//     };

//     const handleCategoryClick = (category) => {
//         navigate('/products', { state: { category } });
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('email');
//         setEmail(null);
//         navigate('/login'); // Redirect to login page after logout
//     };

//     return (
//         <div className='navbar'>
//             <Link to="/">
//                 <img src={logo} alt="Logo" className='logo' />
//             </Link>
//             <ul className='links'>
//                 <li><Link to="/men">MEN</Link></li>
//                 <li><Link to="/women">WOMEN</Link></li>
//                 <li><Link to="/sell-with-us">SELL WITH US</Link></li>
//                 {/* <li><Link to="/charity">CHIC FOR CHARITY</Link></li> */}
//             </ul>
//             <div className='search-box'>
//                 <input 
//                     type="text" 
//                     placeholder='Search' 
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     aria-label="Search"
//                 />
//                 <FiSearch className='search-icon'/>
//             </div>
//             <Link to="/wishlist"><FaHeart className='navbar-icons' /></Link>
//             <div ref={dropdownRef} className='dropdown-container'>
//                 <FaRegUser className='navbar-icons' onClick={toggleDropdown} />
//                 {isDropdownOpen && (
//                     <div className="dropdown-menu">
//                         <ul>
//                         {email ? (
//                                 <>
//                                     <li>Welcome</li>
//                                     <li onClick={handleLogout}>Logout</li>
//                                 </>
//                             ) : (
//                                 <li onClick={() => handleNavigation('/login')}>Login/SignUp</li>
//                             )}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             <Link to ="/cart"><FaShoppingCart className='navbar-icons'/></Link>
//         </div>
//     );
// };

// export default Navbar;
