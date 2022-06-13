import React, {useEffect} from 'react';
import pageImg from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import {Link} from "react-router-dom";

function Donate({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Doneren om deze website te onderhouden");
    } ,[]);

    return (
        <section className="page-content">
            <h2>Wil je doneren? Heel graag!</h2>
            <p>Gemaakt door Nynke (van Cupkiezer) omdat er nog bijna geen informatie over menstruatiedisk in het Nederlands te vinden was. Terwijl het zo’n geweldig duurzaam product is.</p>
            <h2>Waar draag je aan bij?</h2>
            <p>Ik onderhoud deze website en content zelf. Dat vind ik heel leuk om te doen, maar het kost altijd meer tijd dan je denkt. En het kost ook nog eens gewoon geld.
            </p>
            <p>Hosting, fotografie, stroom, laptop, </p>
            <h2>Samen zorgen we dat onafhankelijke informatie beschikbaar is!</h2>
        </section>
    );
}

export default Donate;