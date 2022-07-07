import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

import pageImg
    from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4308-1000x400.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import TwoColumnWithImg from "../components/pageItems/pageDesignElements/twoColumn/TwoColumnWithImg";
import cupsOnRackImg
    from "../assets/20211217-16-42-27-Cupkiezer-verschillende-menstruatiecup-vergelijken-op-kruidenrek-1024x1024.jpg";
import TwoColumn from "../components/pageItems/pageDesignElements/twoColumn/TwoColumn";
import Column from "../components/pageItems/pageDesignElements/twoColumn/Column";


function Contact({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Contact met Nynke, de maker achter menstruatiedisk.nl");
    }, []);


    return (
        <>
            <TextContainer>
                <h1>Contact</h1>
                <p>Hoi! Heb je vragen? Lees eerst de <Link to="/faq">veelgesteldevragen-pagina</Link>, misschien staat
                    je vraag daar wel tussen. Anders kun je ons via social media en e-mail bereiken.</p>
                <p>We hebben ook een <a href="https://www.facebook.com/groups/menstruatiecupclub/" target="_blank">gezellige
                    Facebookgroep</a> waar je vragen kan stellen.</p>
            </TextContainer>


            <TwoColumnWithImg img={cupsOnRackImg} imgAlt="alt text" imgCaption="lees deze caption">
                <h2>Onafhankelijk en genderneutraal</h2>
                <p> Wat Cupkiezer bijzonder maakt is dat het een <span className="highlighter">onafhankelijke site</span> is;
                    we worden niet betaald door cup-fabrikanten.
                    Ook vinden we het belangrijk dat alles <span className="highlighter">genderneutraal</span> gecommuniceerd wordt.
                    Cupkiezer is gericht op elk persoon met interesse in een menstruatiecup. Niet iedereen die menstrueert is een vrouw en niet
                    iedere vrouw menstrueert. We willen de site zo inclusief en genderneutraal mogelijk houden, zodat
                    iedereen zich welkom voelt.</p>

            </TwoColumnWithImg>

        </>
    );
}

export default Contact;