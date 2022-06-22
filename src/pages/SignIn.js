import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import pageImg
    from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import {useForm} from 'react-hook-form';


function SignIn({headerImageHandler, pageTitleHandler}) {
    const {login, logout, auth} = useContext(AuthContext);
    const {register, formState: {errors}, handleSubmit} = useForm({mode: 'onBlur'});

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Inloggen");
    }, []);

    return (
        <>

        <YellowContentBox>

            <form onSubmit={handleSubmit(login)}>
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
                        />
                    </label>
                    {errors.password && <p>{errors.password.message}</p>}<br/>


                    {auth === false ?
                        <button type="button"
                                onClick={login}
                        >
                            Login
                        </button> :
                        <button
                            type="button"
                            onClick={logout}
                        >
                            Uitloggen
                        </button>
                    }
            </form>
        </fieldset>
        </YellowContentBox>
    <section className="page-content">
        <p>Heb je nog geen account? <Link to="/registreren" exact>Registreer</Link> je dan eerst.</p>
    </section>
</>
)
    ;
}

export default SignIn;