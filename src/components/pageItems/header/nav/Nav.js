import React from 'react';
import {NavLink, useLocation} from "react-router-dom";


function Nav() {
    let location = useLocation().pathname;
    console.log(location);

    function getNavClass(location) {
        switch (location) {
            case "":
                return "/nav-home";
            case "/informatie-over-menstruatiedisks":
                return "nav-info";
            case "/vergelijk-meerdere-menstruatiedisks":
                return "nav-vergelijk";
            case "/contact":
                return "nav-contact";
            default:
                return "nav-home";
        }
    }

    return (
        <div className="nav-container">
        <nav>
            <ul className={getNavClass(location) + " nav-list"}>
                <li><NavLink to="/" end className={(navData) => navData.isActive ? "active-link" : "" }>home</NavLink></li>
                <li><NavLink to="/informatie-over-menstruatiedisks" className={(navData) => navData.isActive ? "active-link" : "" }>info</NavLink></li>
                <li><NavLink to="/vergelijk-meerdere-menstruatiedisks" className={(navData) => navData.isActive ? "active-link" : "" }>vergelijken</NavLink></li>
                <li><NavLink to="/contact" end className={(navData) => navData.isActive ? "active-link" : "" }>contact</NavLink></li>
            </ul>

        </nav>
        </div>
    );
}

export default Nav;