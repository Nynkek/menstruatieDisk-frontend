import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./form.css";
import DiscAddForm from "./DiscAddForm";
import {AuthContext} from "../../context/AuthContext";

function DiscApproveForm({pendingDiscId, teksttest}) {
    const [discId, setDiscId] = useState(10);
    const [discData, setDiscData] = useState(null);
    const {user: {username}, token} = useContext(AuthContext);


    useEffect(() => {

            async function fetchData() {
                try {
                    const response = await axios.get(`http://localhost:8080/pendingdiscs/${discId}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`,
                            }
                        });
                    console.log("response.data: ")
                    console.log(response.data);
                    // setDiscData(response.data);
                    setDiscData({
                        createdDateForm: response.data.createdData,
                        nameForm: response.data.name,
                        brandForm: response.data.brand,
                        modelForm: response.data.model,
                        widthForm: response.data.width,
                        capacityForm: response.data.capacity,
                        rimWidthForm: response.data.rimWidth,
                        isReusableForm: response.data.isReusable ? "true" : "false",
                        hasStemForm: response.data.hasStem ? "true" : "false",
                        designFeatureForm: response.data.designFeature,
                        shapeForm: response.data.shape,
                        firmnessForm: response.data.firmness,
                        linkToReviewForm: response.data.linkToStore,
                        linkToStoreForm: response.data.linkToReview,
                        imageForm: response.data.image,
                        isAvailableInNLForm: response.data.isAvailableInNL ? "true" : "false",
                        materialForm: response.data.material,
                        // usernameForm: response.data.username,
                    });


                } catch (error) {
                    console.error("een error met data ophalen", error);
                }
            }

            fetchData();
        }, []
    )
    ;

    return (
        <div>
            <p>Hey {username}!</p>
            {teksttest}
            {discData ? <DiscAddForm preloadedValues={discData} postLink="http://localhost:8080/discs/addDisc"/> :
                <div>Loading...</div>}
        </div>
    );
}

export default DiscApproveForm;