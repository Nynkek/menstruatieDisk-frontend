import React from 'react';
import logo from '../../../assets/menstruatiedisk-logo-rood.png';
import Nav from "./nav/Nav";
import HeaderImage from "./headerImage/HeaderImage";
import {useNavigate, Link} from 'react-router-dom';


function Header({headerImage, pageTitle}) {
    const history = useNavigate();

    const toLink = (e) => {
        e.preventDefault();
        history.push("/doneren");
    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/"><figure><img src={logo} alt="logo" className="logo"/></figure></Link>
                </div>
                <div className="-btn">
                    <button type="button" onClick={toLink}><span className="btn-text">Doneer!</span></button>
                </div>
            </header>
            <Nav/>
            <div className="header-img-container">
                <figure>
                    <img src={headerImage} className="header-img"/>
                </figure>
                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>

            </div>
        </>
    );
}

export default Header;