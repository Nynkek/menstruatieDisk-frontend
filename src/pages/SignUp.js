import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import pageImg from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";

function SignUp({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Registreren van een account");
    } ,[]);

    return (
        <>
           <TextContainer>
            <p>Hier kun je je registreren. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form>
                <p>*Invoervelden*</p>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/inloggen">hier</Link> inloggen.</p>
           </TextContainer>

        </>
    );
}

export default SignUp;