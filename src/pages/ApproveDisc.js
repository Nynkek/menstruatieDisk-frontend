import React, {useEffect} from 'react';
import pageImg from "../assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import DiscApproveForm from "../components/forms/DiscApproveForm";
import {useParams} from "react-router-dom";

function ApproveDisc({headerImageHandler, pageTitleHandler}) {
    const {discId} = useParams();

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("PendingDisc accepteren");
    }, [headerImageHandler]);


    return (
        <>
            <TextContainer>
                <p>Je kunt via dit formulier een menstruatiedisk accepteren aan de tabel in het overzicht. Voordat hij
                    zichtbaar wordt, wordt hij eerst nagekeken door Nynke.</p>
                <p>Heb je vragen neem dan contact op.</p>
                <p>Nummer: {discId && discId}</p>
            </TextContainer>
            <YellowContentBox>
                <DiscApproveForm pendingDiscId={discId}/>
            </YellowContentBox>
            <TextContainer>
                <span className="bigFont"> ▤ ▥ ▦ ▧ ▨ ▩ </span>

            </TextContainer>

        </>
    );
}

export default ApproveDisc;