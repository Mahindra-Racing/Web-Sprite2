import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="logo" href="#">Formula E<br /></a>
            <ul className="nav-list1">
                <li><Link to='/' className="linkNavbar">Banana</Link></li>
                <li><Link to='/Stream' className="linkNavbar">Ajuda</Link></li>
            </ul>
            <ul className="nav-list2">
                <li>
                <Link to="/Register" className="linkRegister"><button className="btn-entrar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--accent-clr)">
                            <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                        </svg>
                        Register
                    </button></Link>
                </li>
                <li>
                    <button className="btn-cadastrar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                            <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" />
                        </svg>
                        Join now
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
