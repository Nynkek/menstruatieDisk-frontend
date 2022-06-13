import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import pageImg from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import YellowContentBox from "../components/pageDesignElements/yellowContentBox/YellowContentBox";
import TextContainer from "../components/pageDesignElements/textContainer/TextContainer";

function Profile({headerImageHandler, pageTitleHandler}) {


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Profielpagina");
    } ,[]);

    return (
        <>
            <TextContainer>
                <p>Welkom op de profielpagina. Je kunt hier al je gegevens bekijken.</p>
            </TextContainer>
            <YellowContentBox>
                <section>
                    <h2>Gegevens</h2>
                    <p><strong>Gebruikersnaam:</strong> hardcoded-test</p>
                    <p><strong>Email:</strong> hardcoded@test.com</p>
                </section>
            </YellowContentBox>

            <TextContainer>
                <h2>Strikt geheime profiel-content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
                <br/>
                <p>Terug naar de <Link to="/">Homepagina</Link></p>
            </TextContainer>


        </>
    );
}

export default Profile;