import React, {useEffect} from 'react';
import pageImg from "../assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";

function PrivacyPolicy({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Privacy policy");
    }, []);

    return (
        <TextContainer>

            <p> Menstruatiedisk.nl hecht waarde aan de privacy van lezers en quiz-gebruikers en begrijpt en erkent dat jouw
                privacy heel belangrijk is. Hieronder staat kort welke informatie wij ontvangen als je Menstruatiedisk.nl
                bezoekt en welke stappen ondernomen worden om jouw informatie te beschermen.</p>

            <p> Maar het allerbelangrijkste: Wij zullen nooit je persoonlijke informatie gebruiken om door te geven aan
                derden (tenzij het wettelijk verplicht wordt).</p>
            <p>Hier komt binnenkort de privacy policy</p>

        </TextContainer>
    );
}

export default PrivacyPolicy;