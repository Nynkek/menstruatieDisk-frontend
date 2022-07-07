import React, {useEffect} from 'react';
import pageImg from "../assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4308-1000x400.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import {Link} from "react-router-dom";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import TwoColumnWithImg from "../components/pageItems/pageDesignElements/twoColumn/TwoColumnWithImg";
import cupsOnRackImg
    from "../assets/20211217-16-42-27-Cupkiezer-verschillende-menstruatiecup-vergelijken-op-kruidenrek-1024x1024.jpg";
import TwoColumn from "../components/pageItems/pageDesignElements/twoColumn/TwoColumn";
import Column from "../components/pageItems/pageDesignElements/twoColumn/Column";


function Elements({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Design elementen");
    } ,[]);
    return (
        <>
            <TextContainer>
                <h1>Dit is een H1</h1>
                <p>Dit is tekst</p>
                <h2>Dit is een h2</h2>
                <p>Dit is tekst</p>
                <h3>Dit is een h3</h3>
                <p>Dit is tekst</p>
                <h4>Dit is een h4</h4>
                <p>Dit is tekst</p>
                <button type="button"><span className="btn-text">Button</span></button>
            </TextContainer>
            <TextContainer>
                <h1>Dit is een textContainer</h1>
            </TextContainer>
            <YellowContentBox>Dit is een YellowContentBox</YellowContentBox>
            <BookmarkBox verticalText="box"><p>Dit is een BookmarkBox</p></BookmarkBox>

            <TwoColumnWithImg img={cupsOnRackImg} imgAlt="alt text" imgCaption="lees deze caption">
                <p>Dit is TwoColumn</p>
                <h2>titel</h2>
                <p>Lorem ipsum dolor sit amet, <span className="highlighter"> consectetur adipisicing elit. Aut consectetur dignissimos </span>dolor doloribus dolorum, error facilis fuga incidunt minus nihil nobis non numquam odit officia porro possimus quod repudiandae sit veniam voluptatem? Dicta earum laudantium molestias officia, quidem vel vitae voluptatum!</p>
                <button type="button"><span className="btn-text">Dit is een button</span></button>
            </TwoColumnWithImg>
            <BookmarkBox verticalText="Schoonmaken">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur aut beatae debitis dolor, est eum eveniet excepturi, expedita explicabo, in iusto laudantium nihil officia officiis omnis quasi qui ratione rem repellendus unde vero voluptatibus voluptatum. Ducimus enim error, ex exercitationem in inventore natus nihil odit praesentium reprehenderit, saepe sint sunt voluptatibus! Accusantium consequuntur doloribus est expedita hic laudantium magnam molestias odio qui, quisquam rem sit tenetur ut voluptatibus?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur aut beatae debitis dolor, est eum eveniet excepturi, expedita explicabo, in iusto laudantium nihil officia officiis omnis quasi qui ratione rem repellendus unde vero voluptatibus voluptatum. Ducimus enim error, ex exercitationem in inventore natus nihil odit praesentium reprehenderit, saepe sint sunt voluptatibus! Accusantium consequuntur doloribus est expedita hic laudantium magnam molestias odio qui, quisquam rem sit tenetur ut voluptatibus?</p>
            </BookmarkBox>
            <TwoColumn>
                <Column>
                    <p>TwoColumn</p>
                    <p>Een menstruatiedisk is een menstruatieproduct. Het is <strong>een platte disk, die je menstruatie
                        opvangt. </strong>
                        Disks zijn (meestal) van medisch goedgekeurd siliconen gemaakt en gaan tot 10 jaar mee!</p>

                    <h3>Verschil tussen tampons/maandverband en een disk</h3>
                    <p>Tampons en maandverband <strong>absorberen</strong> je menstruatie, maar een disk vangt het alleen
                        op. </p>
                    <p>Je kun een disk tot <strong>12 uur lang dragen</strong>. Daarna haal je de disk eruit, door met je vinger achter de
                        rand te haken (of met het lusje als je disk die heeft), leegt de disk en spoelt hem af. Daarna breng je hem weer terug
                        in. Voor nog 12 uur zorgeloze menstruatie.</p>
                </Column>
                <Column>
                    <h3>Kan iedereen een disk 12 uur dragen?</h3>
                    <p>Nee, het ligt aan de heftigheid van je menstruatie. Als de disk eerder dan 12 uur vol is, zul je hem
                        eerder moeten legen. Maar een disk vangt veel menstruatie op! 30 tot 70ml! Ter vergelijking: een
                        regular tampon heeft een opvangvermogen van 8-10 ml.</p>

                    <h3>Disk uitkoken</h3>
                    <p>Na of voor je menstruatie is het aan te raden om je disk even uit te koken door hem in een
                        pannetje/mok/bakje met kokend heet water te leggen.</p>
                </Column>
            </TwoColumn>
        </>
    );
}

export default Elements;