import React, {useEffect, useState} from 'react';
import pageImg
    from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";

function SignUp({headerImageHandler, pageTitleHandler}) {
    const {register, formState: {errors}, handleSubmit} = useForm({mode: 'onBlur'});
    const [addSucces, toggleAddSuccess] = useState(false);
    const [error, setError] = useState(false);
    const source = axios.CancelToken.source();
    let navigate = useNavigate();


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Registreren van een account");
    }, [headerImageHandler, pageTitleHandler]);

    // useEffect(() => {
    //     return function cleanup() {
    //         source.cancel();
    //     }
    // }, []);

    const [users, setUsers] = useState([]);

    async function addUser(e) {

        console.log(e.username, e.emailAdress, e.password);
        try {
            const response = await axios.post("http://localhost:8080/users/createUser/", {
                username: e.username,
                password: e.password,
                emailAdress: e.emailAdress,
            }, {
                cancelToken: source.token,
            });
            toggleAddSuccess(true);
            navigate("/inloggen");
        } catch (error) {
            console.error('There was an error!', error);
            setError(true);
        }
        ;
    }

    return (
        <>
            <TextContainer>
                <p>Hier kun je je registreren. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                    atque consectetur, dolore eaque eligendi
                    harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda,
                    consequuntur deserunt
                    doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            </TextContainer>
            <YellowContentBox>
                {addSucces === true && <p>Gebruiker is toegevoegd!</p>}
                <form onSubmit={handleSubmit(addUser)}>
                    <h3 className="legend">Vul je gegevens in om te registreren</h3>

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
                    {errors.username && <p className="error-label">{errors.username.message}</p>}
                    <br/>

                    <label htmlFor="details-emailAdress">
                        e-mailadres:
                        <input
                            type="text"
                            id="details-emailAdress"
                            {...register("emailAdress", {
                                maxLength: {
                                    value: 80,
                                    message: "Je emailadres mag maximaal 80 karakters bevatten",
                                },
                                required: "Veld mag niet leeg zijn",
                            })}
                        />
                    </label>
                    {errors.emailAdress && <p className="error-label">{errors.emailAdress.message}</p>}<br/>

                    <label htmlFor="details-password">
                        Wachtwoord:
                        <input
                            type="password"
                            id="details-password"
                            {...register("password",
                                {
                                    required: "veld mag niet leeg zijn",
                                })}
                        />
                    </label>
                    {errors.password && <p className="error-label">{errors.password.message}</p>}<br/>

                    <label htmlFor="accept-terms">
                        <input
                            type="checkbox"
                            id="accept-terms"
                            {...register("acceptTerms", {
                                required: "Je kan je alleen registreren als je met onze voorwaarden instemt."
                            })}
                        />
                        Ik ga akkoord met de algemene voorwaarden.
                    </label>
                    {errors.acceptTerms && <p className="error-label">{errors.acceptTerms.message}</p>}
                    <br/>

                    <button type="submit">
                        Registreren
                    </button>
                </form>
                {error && "Er ging iets mis, probeer het later opnieuw."}


            </YellowContentBox>

        </>
    );
}

export default SignUp;