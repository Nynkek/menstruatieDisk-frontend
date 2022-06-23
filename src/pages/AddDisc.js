import React, {useEffect, useState} from 'react';
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import DiscAddForm from "../components/forms/DiscAddForm";
import pageImg
    from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";


function AddDisc({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Disc toevoegen");
    }, []);


    return (
        <>
            <TextContainer>
                <p>Je kunt via dit formulier een menstruatiedisk toevoegen aan de tabel in het overzicht. Voordat hij
                    zichtbaar wordt, wordt hij eerst nagekeken door Nynke.</p>
                <p>Heb je vragen neem dan contact op.</p>
            </TextContainer>
            <YellowContentBox>
                <DiscAddForm/>
            </YellowContentBox>

        </>
    );
}

export default AddDisc;