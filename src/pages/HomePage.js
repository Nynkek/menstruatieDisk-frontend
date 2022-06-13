import React, {useEffect, useState} from 'react';
import axios from "axios";
import pageImg from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4308-1000x400.jpg";


function HomePage({headerImageHandler, pageTitleHandler}) {

    const [menstrualDisks, setMenstrualDisks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080")
            .then((response) => {
                setMenstrualDisks(response.data);
                console.log(response.data);
            }).catch(error => {
            console.error('There was an error!', error);
        });

    }, []);

    function showDisks(array) {
        let newArray = array.map(({id, name, brand}) => {
            return <li key={id}>{brand} {name}</li>;
        });
        return newArray;
    }

    headerImageHandler(pageImg);
    pageTitleHandler("Menstruatiedisk homepage");

    return (

        <>
            <div className="page-content">
                <h2>Vergelijken</h2>
                <p>We gaan disks vergelijken!</p>
                <h3>Menstruatiedisks</h3>
                <ul>{showDisks(menstrualDisks)}</ul>
            </div>
        </>
    );
}

export default HomePage;