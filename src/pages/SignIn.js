import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import pageImg from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import YellowContentBox from "../components/pageDesignElements/yellowContentBox/YellowContentBox";


function SignIn({headerImageHandler, pageTitleHandler}) {
    const {login, logout, auth} = useContext(AuthContext);

    headerImageHandler(pageImg);
    pageTitleHandler("Inloggen");


    return (
        <>

            <YellowContentBox>
                <form>
                    <p>*invoervelden*</p>
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
            </YellowContentBox>
            <section className="page-content">
            <p>Heb je nog geen account? <Link to="/registreren" exact>Registreer</Link> je dan eerst.</p>
            </section>
        </>
    );
}

export default SignIn;