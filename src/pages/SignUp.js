import React, {useEffect, useState} from 'react';
import {Link, Navigate, Redirect, useNavigate} from 'react-router-dom';
import pageImg
    from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import {useForm} from "react-hook-form";
import axios from "axios";

function SignUp({headerImageHandler, pageTitleHandler}) {
    const {register, formState: {errors}, handleSubmit} = useForm({mode: 'onBlur'});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [addSucces, toggleAddSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Registreren van een account");
    }, []);

    const [users, setUsers] = useState([]);

    async function addUser(e) {
        setName(e.username);
        setPassword(e.password);
        setEmail(e.emailAdress);
        console.log(e.username, e.emailAdress, e.password);
        try {
            const response = await axios.post("http://localhost:8080/users/createUser/", {
                username: name,
                password: password,
                emailAdress: email,
            },);
            console.log(response.data);
            toggleAddSuccess(true);
            // navigate("/inloggen");
        } catch (error) {
            console.error('There was an error!', error);
        };
    }

    return (
        <>
            <TextContainer>
                <p>Hier kun je je registreren. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                    atque consectetur, dolore eaque eligendi
                    harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda,
                    consequuntur deserunt
                    doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

                {addSucces === true && <p>Gebruiker is toegevoegd!</p>}
                <form onSubmit={handleSubmit(addUser)}>
                    <fieldset>
                        <legend>Gegevens</legend>

                        <label htmlFor="details-username">
                            Naam:
                            <input
                                type="text"
                                id="details-username"
                                {...register("username", {
                                    required: "Username mag niet leeg zijn.",
                                    maxLength: {
                                        value: 20,
                                        message: "Er mogen maximaal 20 karakters gebruikt worden.",
                                    },
                                })}
                                placeholder="username"

                            />
                        </label>
                        {errors.username && <p>{errors.username.message}</p>}
                        <br/>

                        <label htmlFor="details-emailAdress">
                            e-mailadres:
                            <input
                                type="text"
                                id="details-emailAdress"
                                {...register("emailAdress", {
                                    maxLength: {
                                        value: 80,
                                        message: "Je wachtwoord mag maximaal 80 karakters bevatten",
                                    },
                                    required: "Naam mag niet leeg zijn",
                                })}
                            />
                        </label>
                        {errors.emailAdress && <p>{errors.emailAdress.message}</p>}<br/>

                        <label htmlFor="details-password">
                            Wachtwoord:
                            <input
                                type="text"
                                id="details-password"
                                {...register("password")}
                            />
                        </label>
                        {errors.password && <p>{errors.password.message}</p>}<br/>

                        <label htmlFor="accept-terms">
                            <input
                                type="checkbox"
                                id="accept-terms"
                                {...register("acceptTerms", {
                                    required: "verplicht veld"
                                })}
                            />
                            Ik ga akkoord met de algemene voorwaarden.
                        </label>
                        {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>}
                        <br/>

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