import React, {useEffect, useState} from 'react';
import axios from "axios";
import pageImg
    from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4308-1000x400.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import TwoColumn5050 from "../components/pageItems/pageDesignElements/twoColumn/twoColumn50-50";
import TwoColumn from "../components/pageItems/pageDesignElements/twoColumn/TwoColumn";
import Column from "../components/pageItems/pageDesignElements/twoColumn/Column";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import TwoColumnWithImg from "../components/pageItems/pageDesignElements/twoColumn/TwoColumnWithImg";
import cupsOnRackImg
    from "../assets/20211217-16-42-27-Cupkiezer-verschillende-menstruatiecup-vergelijken-op-kruidenrek-1024x1024.jpg";

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

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Menstruatiedisk informatie");
    }, []);


    return (

        <>
            <TextContainer>
                <h2>Wat is een menstruatiedisk?</h2>
            </TextContainer>
            <TwoColumn>
                <Column>
                    <p>Een menstruatiedisk is een menstruatieproduct. Het is <strong>een platte disk, die je menstruatie
                        opvangt. </strong>
                        Disks zijn (meestal) van medisch goedgekeurd siliconen gemaakt en gaan tot 10 jaar mee!</p>

                    <h3>Verschil tussen tampons/maandverband en een disk</h3>
                    <p>Tampons en maandverband <strong>absorberen</strong> je menstruatie, maar een disk vangt het
                        alleen
                        op. </p>
                    <p>Je kun een disk tot <strong>12 uur lang dragen</strong>. Daarna haal je de disk eruit, door met
                        je vinger achter de
                        rand te haken (of met het lusje als je disk die heeft), leegt de disk en spoelt hem af. Daarna
                        breng je hem weer terug
                        in. Voor nog 12 uur zorgeloze menstruatie.</p>
                </Column>
                <Column>
                    <h3>Kan iedereen een disk 12 uur dragen?</h3>
                    <p>Nee, het ligt aan de heftigheid van je menstruatie. Als de disk eerder dan 12 uur vol is, zul je
                        hem
                        eerder moeten legen. Maar een disk vangt veel menstruatie op! 30 tot 70ml! Ter vergelijking: een
                        regular tampon heeft een opvangvermogen van 8-10 ml.</p>

                    <h3>Disk uitkoken</h3>
                    <p>Na of voor je menstruatie is het aan te raden om je disk even uit te koken door hem in een
                        pannetje/mok/bakje met kokend heet water te leggen.</p>
                </Column>
            </TwoColumn>
            <BookmarkBox verticalText="gebruik">
                <h2>Hoe gebruik je een disk?</h2>
                <ul>
                    <li><strong>Kook je disk</strong> 5 minuten uit voor gebruik.</li>
                    <li><strong>Vouw de disk</strong> tot een platte ovaal door hem aan de zijkanten in te drukken.</li>
                    <li>Spreid je benen. <strong>Schuif de disk voorzichtig in je vagina</strong>, terwijl je de
                        zijkanten samengeknepen
                        houdt. Je kan glijmiddel op waterbasis gebruiken om het soepeler te laten gaan. Kantel de disk
                        licht naar beneden, dus niet zoals bij een tampon recht omhoog. De disk moet onder je
                        baarmoedermond gaat zitten.
                    </li>
                    <li><strong>Klem de disk een de voorkant vast achter je schaambeen.</strong> Dit bot zit aan het
                        begin van je vagina
                        bij je buik. Elk lichaam is anders, dus hoe ver dit precies zit ligt aan jouw bouw.
                    </li>
                    <li>Duw de disk zo ver dat hij niet meer verder naar achter kan. Nu kun je
                        hem <strong>loslaten!</strong> Als de disk
                        goed is ingebracht voel je hem niet zitten. Voel je hem toch? Dan heb je hem waarschijnlijk niet
                        ver genoeg ingebracht. Probeer het nog eens opnieuw.
                    </li>
                    <li><strong>tot 12 uur lang chillen!</strong></li>
                    <li>Om de disk eruit te halen spreid je weer je benen en breng een schone vinger in je vagina. Haak
                        een vinger achter de rand van de disk, en <strong>haal de disk eruit</strong>. Zorg er wel voor
                        dat
                        je de disk horizontaal houdt, zodat je niet morst. Dit kan in het begin nog even lastig zijn,
                        dus neem er rustig de tijd voor en doe dit in een vertrouwde omgeving.
                    </li>
                    <li>Hem je de disk eruit? Leeg hem dan in de wc en <strong>spoel hem met water af</strong>.</li>
                    <li>Begin weer bij stap 2, en blijf dit <strong>herhalen</strong> tot je menstruatie voorbij is. :)
                    </li>
                    <li>Menstruatie voorbij? <strong>Kook je disk even uit</strong> en bewaar hem in de tussentijd in
                        een ademend tasje op een droge locatie. (Dus liever niet in de
                        badkamer en ook niet in een luchtdichte container.)
                    </li>
                </ul>
            </BookmarkBox>
            <TextContainer>
                <h2>Hoe maak je een menstruatiedisk schoon?</h2>
                <p>Aangeraden wordt om minimaal een keer per cyclus (er voor of erna) je disk uit te koken. Dit kan in
                    een steelpannetje op het fornuis. Maar ook in een mok/bakje met wat water in de magnetron.</p>
            </TextContainer>
            <TwoColumnWithImg img={cupsOnRackImg}
                              imgAlt="Verschillende cups op een vintage kruidenrek."
                              imgCaption="Verschillende cups op een vintage kruidenrek.">
                <h2>Hoe vouw je een disk?</h2>
                <p>Een disk kun je maar op een manier vouwen, erg simpel (zeker als je cups gewend bent, die hebben veel
                    vouwen!). Je disk vouw je door de zijkanten in te drukken. Op die manier heb je een platte
                    ovaal.</p>
            </TwoColumnWithImg>
        </>
    );
}

export default HomePage;