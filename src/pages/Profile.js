import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import pageImg
    from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";

function Profile({headerImageHandler, pageTitleHandler}) {
    const [userData, setUserData] = useState();
    const {user: {username}, logout} = useContext(AuthContext);
    const [isAdmin, toggleIsAdmin] = useState(false);
    const [isBrand, toggleIsBrand] = useState(false);
    const [pendingDiscList, setPendingDiscList] = useState();
    const token = localStorage.getItem('token');
    const [discDeleted, toggleDiscDeleted] = useState(false);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Profielpagina");
    }, [headerImageHandler, pageTitleHandler]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function getData(id, token) {
            try {
                const response = await axios.get(`http://localhost:8080/users/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                setUserData(response.data);
                console.log(response.data.authorities);
                response.data.authorities.map((userRole) => {
                    if (userRole.authority === "ROLE_ADMIN") {
                        return toggleIsAdmin(true);
                    }
                    if (userRole.authority === "ROLE_BRAND") {
                        return toggleIsBrand(true);
                    }

                })
            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        getData(username, token);
        return function cleanup() {
            source.cancel();
        }

    }, []);

    async function deleteDisc(discId) {
        try {
            const response = await axios.delete(`http://localhost:8080/pendingdiscs/delete/${discId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });

        } catch (error) {
            console.error("een error met data ophalen", error);
        }
        toggleDiscDeleted(!discDeleted);

    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:8080/pendingdiscs/`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    });
                setPendingDiscList(response.data.map((disc) => {
                        return <li key={disc.id}>
                            <Link to={`/disk-accepteren/${disc.id}`}>{disc.brand}
                                <strong> {disc.name}</strong> - {disc.model}
                            </Link>
                            ({disc.createdDate})
                            <button className="delete-btn" onClick={() => deleteDisc(disc.id)}>Delete Pending Disk</button>
                        </li>
                    })
                )
            } catch (error) {
                console.error("een error met data ophalen", error);
            }
        }

        fetchData();

    }, [isAdmin, discDeleted]);

    return (
        <>
            <TextContainer>
                <p>Welkom op de profielpagina. Je kunt hier al je gegevens bekijken.</p> <p>Terug naar de <Link
                to="/">Homepagina</Link></p>
            </TextContainer>
            <YellowContentBox>
                <section>
                    <h2>Jouw gegevens</h2>
                    <p><strong>Gebruikersnaam:</strong> {username}</p>
                    <p><strong>Email:</strong> {userData && userData.emailAdress}</p>
                    <p>Wil je ze aanpassen? Stuur dan een e-mail, want die functionaliteit zit er nog niet in.</p>
                </section>
            </YellowContentBox>

            <TextContainer>
                <h2>Strikt geheime profiel-content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                    molestias qui quo unde?</p>


            </TextContainer>
            {isBrand &&
                <BookmarkBox verticalText="Merk">
                    <h2>Je eigen disk toevoegen?</h2>
                    <p>Je bent bevoegd om een eigen disk toe te voegen.</p>
                    <Link to="/disk-toevoegen" className="highlighter">Eigen disk toevoegen</Link>
                </BookmarkBox>
            }

            {isAdmin &&
                <BookmarkBox verticalText="admin">
                    <h2>{pendingDiscList && pendingDiscList.length} disks om goed te keuren</h2>
                    <p>Je bent admin, dus we gaan je hier alle pending discs tonen.</p>
                    <p>Klik op de naam van de disk om hem te accepteren of wijzigen. Klik op de delete-button ernaast om
                        hem te verwijderen.</p>
                    <ul>{pendingDiscList && pendingDiscList}</ul>
                </BookmarkBox>
            }

            <TextContainer>
                <button type="button" onClick={logout}>Log uit</button>
            </TextContainer>

        </>
    );
}

export default Profile;