import React, {useEffect, useState} from 'react';
import pageImg from '../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg'
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import axios from "axios";
import Tabel from "./Tabel";


function Compare({headerImageHandler, pageTitleHandler}) {
    const [menstrualDiscs, setMenstrualDiscs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/discs/")
            .then((response) => {
                setMenstrualDiscs(response.data);
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

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Vergelijken");
    } ,[]);


    return (
        <>

            <div className="page-content">
                <h2>Vergelijken</h2>
                <p>Er zijn ondertussen zo veel verschillende menstruatiedisks te koop,
                    dat je wellicht door de bomen het bos niet meer ziet.
                    Hieronder vind je de meeste disks die in Nederland en België te koop zijn.
                    Zo kun je ze vergelijken en jouw perfecte disk vinden.
                </p>
            </div>
            <YellowContentBox>
                <h2>Vergelijk alle menstruatiedisks</h2>
                <p>Onder de tabel vind je de legenda. De tabel is het best zichtbaar op een breed scherm.</p>
                <h2>Legenda</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias consequuntur, cum eos iste laborum magnam maxime natus nemo nihil obcaecati officia praesentium qui reprehenderit, repudiandae sed tempore voluptas? A ad aut autem blanditiis culpa, dignissimos ea eligendi facere hic magnam neque placeat quisquam rem repellendus, soluta temporibus tenetur veritatis!</p>
            </YellowContentBox>
            <div className="page-content">
                <h3>Hoe kies je een menstruatiedisk?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales nibh, vitae molestie tellus ultrices eget. Maecenas et nunc eu est mattis ultrices. Duis vel rutrum nulla, eget consequat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales nibh, vitae molestie tellus ultrices eget. Maecenas et nunc eu est mattis ultrices. Duis vel rutrum nulla, eget consequat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales nibh, vitae molestie tellus ultrices eget. Maecenas et nunc eu est mattis ultrices. Duis vel rutrum nulla, eget consequat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales nibh, vitae molestie tellus ultrices eget. Maecenas et nunc eu est mattis ultrices. Duis vel rutrum nulla, eget consequat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {showDisks(menstrualDiscs)}
                <p>test</p>
<Tabel/>
            </div>
        </>
    );
}

export default Compare;