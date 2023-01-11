import React from "react";
import { NavLink } from 'react-router-dom'
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return(
        <nav>
            <ul className="holder">
                <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/" end>Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/tienda">Tienda</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/contacto">Contacto</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/nosotros">Nosotros</NavLink></li>
            </ul>
        </nav>
    );
}
export default Nav;