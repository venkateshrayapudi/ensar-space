import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <div className="container">
            <nav className="sidebar">
                <div className="nav-links">
                    <Link
                        className={`sidebar-link ${selectedLink === 'home' ? 'active' : ''}`}
                        to="/home"
                        onClick={() => handleLinkClick('home')}
                    >
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                    <Link
                        className={`sidebar-link ${selectedLink === 'about' ? 'active' : ''}`}
                        to="/about"
                        onClick={() => handleLinkClick('about')}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} /> About
                    </Link>
                    <Link
                        className={`sidebar-link ${selectedLink === 'addEmployee' ? 'active' : ''}`}
                        to="/addEmployee"
                        onClick={() => handleLinkClick('addEmployee')}
                    >
                        <FontAwesomeIcon icon={faUserPlus} /> Add Employee
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
