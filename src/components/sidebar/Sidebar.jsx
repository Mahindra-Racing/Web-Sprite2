import React, { useState, useRef } from 'react';
import './SideBar.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [isLogoRotated, setIsLogoRotated] = useState(false); // Controla rotação do logo
    const toggleButtonRef = useRef(null);
    const location = useLocation();
    const sidebarRef = useRef(null);

    // Função para alternar o estado do sidebar e girar o logo
    const toggleSidebar = () => {
        setIsSidebarClosed(prevState => !prevState);
        setIsLogoRotated(prevState => !prevState); // Alterna o estado da rotação do logo

        // Fecha todos os submenus quando o sidebar é fechado
        if (!isSidebarClosed) {
            closeAllSubMenus();
        }
    };

    // Função para alternar o submenu específico e girar a flecha
    const toggleSubMenu = (index) => {
        if (openSubMenu === index) {
            setOpenSubMenu(null);
        } else {
            setOpenSubMenu(index);
        }



        // Abre o sidebar caso esteja fechado e o submenu seja clicado
        if (isSidebarClosed) {
            setIsSidebarClosed(false);
            setIsLogoRotated(false); // Reseta a rotação do logo
        }
    };

    // Função para fechar todos os submenus
    const closeAllSubMenus = () => {
        setOpenSubMenu(null);
    };

    return (
        <nav id="sidebar" className={isSidebarClosed ? 'close' : ''}>
            <ul>
                <li>
                    <span className="sidebarLogo">Synthica</span>
                    <button id="toggle-btn" onClick={toggleSidebar} ref={toggleButtonRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className={isLogoRotated ? 'rotated' : ''}>
                            <path d="M313-480l155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0l155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z" />
                        </svg>
                    </button>
                </li>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                            <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" />
                        </svg>
                        <span>Home</span>
                    </Link>
                </li>
                <li className={location.pathname === '/Stream' ? 'active' : ''}>
                    <Link to="/Stream">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m380-340 280-180-280-180v360Zm-60 220v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" /></svg>
                        <span>Stream</span>
                    </Link>
                </li>
                <li className={location.pathname === '/Bet' ? 'active' : ''}>
                    <Link to="/Bet">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" /></svg>
                        <span>Bet</span>
                    </Link>
                </li>
                <li className={location.pathname === '/News' ? 'active' : ''}>
                    <Link to="/News">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z" /></svg>
                        <span>News</span>
                    </Link>
                </li>
                <li className={location.pathname === '/Shop' ? 'active' : ''}>
                    <Link to="/Shop">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" /></svg>
                        <span>Shop</span>
                    </Link>
                </li>
                <hr class="hr" />
                <li>
                    <button className="dropdown-btn" onClick={() => toggleSubMenu(0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-640v-160q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H560q-17 0-28.5-11.5T520-640ZM120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" /></svg>
                        <span>Dashboard</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                            className={openSubMenu === 0 ? 'rotated' : ''}
                        >
                            <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z" />
                        </svg>
                    </button>
                    <ul className={`sub-menu ${openSubMenu === 0 ? 'show' : ''}`}>
                        <li className={location.pathname === '/Dashboard' ? 'active' : ''}>
                            <Link to="/Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z" /></svg>
                                <span>Hub</span>
                            </Link>
                        </li>
                        <li className={location.pathname === '/PilotCard' ? 'active' : ''}>
                            <Link to="/PilotCard">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-600v-160q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v160h-80v-160H160v160H80Zm80 360q-33 0-56.5-23.5T80-320v-200h80v200h640v-200h80v200q0 33-23.5 56.5T800-240H160ZM40-120v-80h880v80H40Zm440-420ZM80-520v-80h240q11 0 21 6t15 16l47 93 123-215q5-9 14-14.5t20-5.5q11 0 21 5.5t15 16.5l49 98h235v80H620q-11 0-21-5.5T584-542l-26-53-123 215q-5 10-15 15t-21 5q-11 0-20.5-6T364-382l-69-138H80Z"/></svg>
                                <span>Static</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <button className="dropdown-btn" onClick={() => toggleSubMenu(0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z" /></svg>
                        <span>Games</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                            className={openSubMenu === 0 ? 'rotated' : ''}
                        >
                            <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z" />
                        </svg>
                    </button>
                    <ul className={`sub-menu ${openSubMenu === 0 ? 'show' : ''}`}>
                        <li className={location.pathname === '/Quiz' ? 'active' : ''}>
                            <Link to="/Quiz">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h160v80H200Zm560 0H600v-80h160v-160h80v160q0 33-23.5 56.5T760-120ZM120-760q0-33 23.5-56.5T200-840h160v80H200v160h-80v-160Zm720 0v160h-80v-160H600v-80h160q33 0 56.5 23.5T840-760ZM480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm-36-153h73q0-34 8-52t35-45q35-35 46.5-56.5T618-598q0-54-39-88t-99-34q-50 0-86 26t-52 74l66 27q7-26 26.5-42.5T480-652q29 0 46.5 15.5T544-595q0 20-9.5 37.5T502-521q-33 29-45.5 56T444-393Z" /></svg>
                                <span>Quiz</span>
                            </Link>
                        </li>
                        <li className={location.pathname === '/Silhouette' ? 'active' : ''}>
                            <Link to="/Silhouette">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-14 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm-30-128h61q0-25 6.5-40.5T544-526q18-20 35-40.5t17-53.5q0-42-32.5-71T483-720q-40 0-72.5 23T365-637l55 23q7-22 24.5-35.5T483-663q22 0 36.5 12t14.5 31q0 21-12.5 37.5T492-549q-20 21-31 42t-11 59Z"/></svg>
                                <span>Silhouette</span>
                            </Link>
                        </li>

                    </ul>
                </li>

                <li className='a'>
                    <Link to="/Profile"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg></Link>
                    <Link to="/Settings"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg></Link>
                    <Link to="/Ajuda"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" /></svg></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar
