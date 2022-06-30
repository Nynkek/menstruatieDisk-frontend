import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import pageImg
    from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import {useForm} from 'react-hook-form';
import axios from "axios";


function SignIn({headerImageHandler, pageTitleHandler}) {
    const {login, logout, auth} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [addSucces, toggleAddSuccess] = useState(false);
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm({mode: 'onBlur'});
    const source = axios.CancelToken.source();


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Inloggen");
    }, []);

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function signIn(e) {
        setName(e.username);
        setPassword(e.password);
        console.log(e.username, e.password);
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: e.username,
                password: e.password,
            }, {
                cancelToken: source.token,
            });
            login(response.data.jwt);
            toggleAddSuccess(true);
        } catch (error) {
            console.error('There was an error!', error);
        }
        ;
    }

    return (
        <>
            <YellowContentBox>
                {!auth ?
                    <form onSubmit={handleSubmit(signIn)}>
                        <fieldset>
                            <legend>Gegevens</legend>
                            <label htmlFor="details-username">
                                Naam:
                                <input
                                    type="text"
                                    id="details-username"
                                    {...register("username", {
                                        required: "Username mag niet leeg zijn.",
                                    })}
                                    placeholder="username"

                                />
                            </label>
                            {errors.username && <p>{errors.username.message}</p>}
                            <br/>

                            <label htmlFor="details-password">
                                Wachtwoord:
                                <input
                                    type="text"
                                    id="details-password"
                                    {...register("password")}
                                    placeholder="wachtwoord"
                                />
                            </label>
                            {errors.password && <p>{errors.password.message}</p>}<br/>

                            <button type="submit">Login</button>
                        </fieldset>
                    </form>
                    : <button type="button" onClick={logout}>Log uit</button>
                }
            </YellowContentBox>
            <section className="page-content">
                <p>Heb je nog geen account? <Link to="/registreren" exact>Registreer</Link> je dan eerst.</p>
            </section>
        </>
    )
        ;
}

export default SignIn;