import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {
    ChevronLeft,
    ChevronsLeft,
    Home,
    PlaySquare,
    Wallet,
    FileText,
    ShoppingBag,
    LayoutDashboard,
    Layers,
    LineChart,
    Gamepad2,
    HelpCircle,
    User,
    Settings,
    CircleHelp,
    Brain,
    Ghost
} from 'lucide-react';

const Sidebar = () => {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [isLogoRotated, setIsLogoRotated] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarClosed(prevState => !prevState);
        setIsLogoRotated(prevState => !prevState);
        if (!isSidebarClosed) {
            closeAllSubMenus();
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
        setIsSidebarClosed(false);
    };

    const toggleSubMenu = (index) => {
        if (openSubMenu === index) {
            setOpenSubMenu(null);
        } else {
            setOpenSubMenu(index);
        }

        if (isSidebarClosed) {
            setIsSidebarClosed(false);
            setIsLogoRotated(false);
        }
    };

    const closeAllSubMenus = () => {
        setOpenSubMenu(null);
    };

    return (
        <>
            <button
                className="hamburger-menu"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`sidebar ${isSidebarClosed ? 'close' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <ul>
                    {!isMobileMenuOpen && (
                        <li className="sidebar-header">
                            <span className="logoSidebar">Synthica</span>
                            <button className="toggle-btn" onClick={toggleSidebar}>
                                <ChevronsLeft
                                    className={isLogoRotated ? 'rotated' : ''}
                                    size={24}
                                    
                                />
                            </button>
                        </li>
                    )}

                    <div className="sidebar-content">
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <Link to="/">
                                <Home size={24} />
                                <span>Home</span>
                            </Link>
                        </li>

                        <li className={location.pathname === '/Stream' ? 'active' : ''}>
                            <Link to="/Stream">
                                <PlaySquare size={24} />
                                <span>Stream</span>
                            </Link>
                        </li>

                        <li className={location.pathname === '/Bet' ? 'active' : ''}>
                            <Link to="/Bet">
                                <Wallet size={24} />
                                <span>Bet</span>
                            </Link>
                        </li>

                        <li className={location.pathname === '/News' ? 'active' : ''}>
                            <Link to="/News">
                                <FileText size={24} />
                                <span>News</span>
                            </Link>
                        </li>

                        <li className={location.pathname === '/Shop' ? 'active' : ''}>
                            <Link to="/Shop">
                                <ShoppingBag size={24} />
                                <span>Shop</span>
                            </Link>
                        </li>

                        <hr className="divider" />

                        <li className="dropdown">
                            <button className="dropdown-btn" onClick={() => toggleSubMenu(0)}>
                                <LayoutDashboard size={24} />
                                <span>Dashboard</span>
                                <ChevronLeft
                                    size={24}
                                    className={`arrow ${openSubMenu === 0 ? 'rotated' : ''}`}
                                />
                            </button>
                            <ul className={`sub-menu ${openSubMenu === 0 ? 'show' : ''}`}>
                                <li className={location.pathname === '/Dashboard' ? 'active' : ''}>
                                    <Link to="/Dashboard">
                                        <Layers size={24} />
                                        <span>Hub</span>
                                    </Link>
                                </li>
                                <li className={location.pathname === '/PilotCard' ? 'active' : ''}>
                                    <Link to="/PilotCard">
                                        <LineChart size={24} />
                                        <span>Static</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <button className="dropdown-btn" onClick={() => toggleSubMenu(1)}>
                                <Gamepad2 size={24} />
                                <span>Games</span>
                                <ChevronLeft
                                    size={24}
                                    className={`arrow ${openSubMenu === 1 ? 'rotated' : ''}`}
                                />
                            </button>
                            <ul className={`sub-menu ${openSubMenu === 1 ? 'show' : ''}`}>
                                <li className={location.pathname === '/Quiz' ? 'active' : ''}>
                                    <Link to="/Quiz">
                                        <Brain size={24} />
                                        <span>Quiz</span>
                                    </Link>
                                </li>
                                <li className={location.pathname === '/Silhouette' ? 'active' : ''}>
                                    <Link to="/Silhouette">
                                        <Ghost size={24} />
                                        <span>Silhouette</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </div>

                    <li className="sidebar-footer">
                        <li className={location.pathname === '/Profile' ? 'active' : ''}>
                            <Link to="/Profile">
                                <User size={24} />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li className={location.pathname === '/Settings' ? 'active' : ''}>
                            <Link to="/Settings">
                                <Settings size={24} />
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li className={location.pathname === '/Ajuda' ? 'active' : ''}>
                            <Link to="/Ajuda">
                                <HelpCircle size={24} />
                                <span>Help</span>
                            </Link>
                        </li>
                    </li>
                </ul>
            </nav>

            {isMobileMenuOpen && (
                <div
                    className="mobile-overlay"
                    onClick={toggleMobileMenu}
                    aria-label="Close mobile menu"
                />
            )}
        </>
    );
};

export default Sidebar;
