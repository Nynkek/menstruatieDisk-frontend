import React, {useEffect} from 'react';
import pageImg from "../../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4367.jpg";
import cupsOnRackImg from "../../../menstruatiedisk-frontend/src/assets/20211217-16-42-27-Cupkiezer-verschillende-menstruatiecup-vergelijken-op-kruidenrek-1024x1024.jpg"
import TwoColumn from "../components/pageItems/pageDesignElements/twoColumn/TwoColumn";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";

function Information({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Menstruatiedisk informatie");
    } ,[]);
    return (
        <>
            <TextContainer>

                <h2>Informatie over disks</h2>
                <p>We gaan disks vergelijken!</p>

            </TextContainer>
            <TwoColumn img={cupsOnRackImg} imgAlt="Verschillende cups op een vintage kruidenrek." imgCaption="Verschillende cups op een vintage kruidenrek.">
                <h2>Titel</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto at, beatae consequatur deserunt, doloremque eaque eius ex itaque iure iusto laborum libero nemo, nisi omnis perferendis repudiandae totam vero? Accusamus deleniti ducimus quasi voluptate.</p>
            </TwoColumn>
        </>
    );
}

export default Information;