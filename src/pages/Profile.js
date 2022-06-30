import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import pageImg
    from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function Profile({headerImageHandler, pageTitleHandler}) {
    const [userData, setUserData] = useState();
    const {user: {username}} = useContext(AuthContext);
    const [isAdmin, toggleIsAdmin] = useState(false);
    const [pendingDiscList, setPendingDiscList] = useState();
    const token = localStorage.getItem('token');

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
                response.data.authorities.map((userRole) => {
                    if (userRole.authority === "ROLE_ADMIN") {
                        toggleIsAdmin(true);
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
                console.log(response.data)
                setPendingDiscList(response.data.map((disc) => {
                    return <li key={disc.id}><Link to={`/disk-accepteren#${disc.id}`}>{disc.brand} <strong>{disc.name}</strong> - {disc.model}</Link> ({disc.createdDate})</li>
                    })
                )
            } catch (error) {
                console.error("een error met data ophalen", error);
            }
        }

        fetchData();

    }, [isAdmin]);

    return (
        <>
            <TextContainer>
                <p>Welkom op de profielpagina. Je kunt hier al je gegevens bekijken.</p>
            </TextContainer>
            <YellowContentBox>
                <section>
                    <h2>Jouw gegevens</h2>
                    <p><strong>Gebruikersnaam:</strong> {userData && userData.emailAdress}</p>
                    <p><strong>Email:</strong> {username}</p>
                </section>
            </YellowContentBox>

            <TextContainer>
                <h2>Strikt geheime profiel-content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                    molestias qui quo unde?</p>
                <br/>
                <p>Terug naar de <Link to="/">Homepagina</Link></p>
            </TextContainer>

            {isAdmin &&
                <TextContainer>
                    <h2>{pendingDiscList.length} disks om goed te keuren</h2>
                    Je bent admin, dus we gaan je hier alle pending discs tonen.
                    <ul>{pendingDiscList}</ul>
                </TextContainer>
            }

            {/*if is admin show lijst van pending discs*/}

            {/*username: "admin", emailAdress: "info@email.nl", apikey: null, authorities:*/}
            {/*[{username: "admin", authority: "ROLE_USER"}, {username: "admin", authority: "ROLE_ADMIN"}]*/}
            {/*, password: "$2a$12$/DQeORgROLU36hixj4tMJO1MSx3uxwscCHtGhoL6ZQ9DMf/Pj/TYm"*/}

        </>
    );
}

export default Profile;