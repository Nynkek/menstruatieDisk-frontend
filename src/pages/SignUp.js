import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import pageImg from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import {useForm} from "react-hook-form";

function SignUp({headerImageHandler, pageTitleHandler}) {
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Registreren van een account");
    } ,[]);

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
           <TextContainer>
            <p>Hier kun je je registreren. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
               <form onSubmit={handleSubmit(onFormSubmit)}>
                   <fieldset>
                       <legend>Gegevens</legend>

                       <label htmlFor="details-username">
                           Naam:
                           <input
                               type="text"
                               id="details-username"
                               {...register("username")}
                           />
                       </label> <br/>

                       <label htmlFor="details-password">
                           Wachtwoord:
                           <input
                               type="text"
                               id="details-password"
                               {...register("password")}
                           />
                       </label><br/>

                       <label htmlFor="accept-terms">
                           <input
                               type="checkbox"
                               {...register("accept-terms")}
                           />
                           Ik ga akkoord met de algemene voorwaarden.
                       </label><br/>

                       <button type="submit">
                           Registreren
                       </button>
                   </fieldset>
               </form>



            <p>Heb je al een account? Je kunt je <Link to="/inloggen">hier</Link> inloggen.</p>
           </TextContainer>

        </>
    );
}

export default SignUp;