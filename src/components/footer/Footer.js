import React, {useContext} from 'react';
import logo from '../../assets/menstruatiedisk-logo-rood.png'
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function Footer() {
    const {auth} = useContext(AuthContext);

    return (
        <div className="footer-container">
            <hr/>
            <footer className="footer">
                <div className="footer-menu">
                    <h3>Meer info</h3>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li>faq</li>
                        <li>privacy policy</li>
                        <li><Link to="/contact">over Nynke</Link></li>
                        <li><Link to="/inloggen">Inloggen</Link></li>
                        {auth && <li><Link to="/profiel">Profiel</Link></li>}
                    </ul>
                </div>
                <div className="footer-txt">
                    <p>Gemaakt door Nynke (van Cupkiezer) omdat er nog bijna geen informatie over menstruatiedisk in het
                        Nederlands te vinden was. Terwijl het zo’n <span className="highlighter">geweldig duurzaam product</span> is.
                    </p>
                    ♥ <p>Deze website was het eindproject van Nynke. <br/>Vind je het project tof,
                    de website lekker werken en het design cool en je op zoek naar een full stack developer:
                    neem contact op!</p>
                </div>
                <div className="footer-logo">
                    <img src={logo} alt="menstruatiedisk.nl logo" className="logo"/>
                    <div className="color-swatches">
                        <div className="footer-color-orange"></div>
                        <div className="footer-color-bluegreen"></div>
                        <div className="footer-color-pink"></div>
                        <div className="footer-color-yellow"></div>
                        <div className="footer-color-red"></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;