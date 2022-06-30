import React, {useEffect, useState} from 'react';
import pageImg
    from '../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg'
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import axios from "axios";
import Tabel from "../components/tabel/Tabel";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import TwoColumn5050 from "../components/pageItems/pageDesignElements/twoColumn/twoColumn50-50";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";


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

    const sizes = menstrualDiscs.length; // misschien map?


    function showDisks(array) {
        let newArray = array.map(({id, name, brand}) => {
            return <li key={id}>{brand} {name}</li>;
        });
        return newArray;
    }

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Vergelijken");
    }, []);


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
                <Tabel/>
            </YellowContentBox>
            <TextContainer>
                <h3>Hoe kies je een menstruatiedisk?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales nibh, vitae molestie
                    tellus ultrices eget. Maecenas et nunc eu est mattis ultrices. Duis vel rutrum nulla, eget consequat
                    diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales nibh, vitae
                    molestie tellus ultrices eget. Maecenas et nunc eu est mattis ultrices. Duis vel rutrum nulla, eget
                    consequat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales
                    nibh, vitae molestie tellus ultrices eget. Maecenas et nunc eu est mattis ultrices. Duis vel rutrum
                    nulla, eget consequat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies
                    sodales nibh, vitae molestie tellus ultrices eget. Maecenas et nunc eu est mattis ultrices. Duis vel
                    rutrum nulla, eget consequat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {showDisks(menstrualDiscs)}
            </TextContainer>
            <BookmarkBox verticalText="legenda">
                <h2>Uitleg menstruatiedisk-tabel</h2>
                <p>Lengte: De lengte van de cup. Dit is exclusief de steel. (Die je er af kan knippen). Meer info.<br/>
                    Inhoud: Hoeveel ml er in de cup kan, tot de luchtgaten gemeten. Voller kan hij ook niet zonder te
                    lekken. Meer info.<br/>
                    Diameter: Is het breedste gedeelte van de cup. Meer info.<br/>
                    Hardheid: In drie gradaties (soft, regular, hard). Meer info.<br/>
                    Materiaal: Cups zijn van Siliconen, TPE of rubber. Meer info.<br/><br/>

                    Dat een cup opgenomen is in deze tabel betekent niet dat wij de cup aanraden. Lees hier meer over
                    cups en veiligheid.</p>
            </BookmarkBox>


        </>
    );
}

export default Compare;