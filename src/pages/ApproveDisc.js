import React from 'react';
import {useEffect} from "@types/react";
import pageImg from "../assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import DiscApproveForm from "../components/forms/DiscApproveForm";

function ApproveDisc({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("PendingDisc accepteren");
    }, []);


    return (
        <>
            <TextContainer>
                <p>Je kunt via dit formulier een menstruatiedisk accepteren aan de tabel in het overzicht. Voordat hij
                    zichtbaar wordt, wordt hij eerst nagekeken door Nynke.</p>
                <p>Heb je vragen neem dan contact op. ▤ ▥ ▦ ▧ ▨ ▩ </p>
            </TextContainer>
            <YellowContentBox>
                <DiscApproveForm/>
            </YellowContentBox>

        </>
    );
}

export default ApproveDisc;