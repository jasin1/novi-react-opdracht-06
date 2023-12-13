import './Navigation.css';
import logo from '../../assets/logo-medium.png';
import { NavLink} from "react-router-dom";

//logo-medium.png

function Navigation() {
    return (
        <nav>
            <div className="logo-wrapper">
                <img src={logo} alt="Logo Blogventure"/>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li><NavLink to="/posts" className="nav-link">Alle Posts</NavLink></li>
                <li><NavLink to="/postmaken" className="nav-link">Nieuwe Post Maken</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;