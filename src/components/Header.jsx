import react from "react"
import logo from '../images/logo.svg';
import "./HeaderStyles.css";
import { BsPersonCircle } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
    return (
        <>
            <nav>
                <div className="left-bar-logo">
                    <img src={logo} alt="main-logo"></img>
                </div>
                <div className="right-navbar-menu">
                    <ul className="navigation-bar">
                        <li>Our Competitors</li>
                        <li>For Professionals</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="separate-navbar"></div>
                <div className="option-bar">
                    <span className="langue-switch">Eng</span>
                    <BsPersonCircle size="1.7rem" />
                    <button className="search-button">
                        <FiSearch size="1.7rem" color="white" />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header