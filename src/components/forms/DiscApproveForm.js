import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./form.css";
import DiscAddForm from "./DiscAddForm";

function DiscApproveForm({pendingDiscId, teksttest}) {
    const [discId, setDiscId] = useState(10);
    const [discData, setDiscData] = useState(null);

    // const preloadedValues = {
    //     createdDateForm: "test",
    //     nameForm: "test",
    //     brandForm: "test",
    //     modelForm: "test",
    //     widthForm: "test",
    //     capacityForm: "test",
    //     rimWidthForm: "test",
    //     isReusableForm: "test",
    //     hasStemForm: "test",
    //     designFeatureForm: "test",
    //     shapeForm: "test",
    //     firmnessForm: "test",
    //     linkToReviewForm: "test",
    //     linkToStoreForm: "test",
    //     imageForm: "test",
    //     isAvailableInNLForm: "test",
    //     materialForm: "test",
    //     usernameForm: "test",
    // }

    useEffect(() => {

            async function fetchData() {
                try {
                    const response = await axios.get(`http://localhost:8080/pendingdiscs/${discId}`);
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
                        isReusableForm: response.data.isReusable,
                        hasStemForm: response.data.hasStem,
                        designFeatureForm: response.data.designFeature,
                        shapeForm: response.data.shape,
                        firmnessForm: response.data.firmness,
                        linkToReviewForm: response.data.linkToStore,
                        linkToStoreForm: response.data.linkToReview,
                        imageForm: response.data.image,
                        isAvailableInNLForm: response.data.isAvailableInNL,
                        materialForm: response.data.material,


                        // usernameForm: response.data.username,
                    });
                    console.log("discData1: ")
                    console.log(discData)
// ;                    let updatedState = {
//                         ...discData,
//                     }
//                     switch (response.data.hasStem) {
//                         case true:
//                             updatedState = {
//                                 ...discData,
//                                 hasStemForm: "true",
//                             }
//                             break
//                         case false:
//                             updatedState = {
//                                 ...discData,
//                                 hasStemForm: "false",
//                             }
//                     }
//                     switch (response.data.isReusable) {
//                         case true:
//                             updatedState = {
//                                 ...discData,
//                                 isReusableForm: "true",
//                             }
//                         case false:
//                             updatedState = {
//                                 ...discData,
//                                 isReusableForm: "false",
//                             }
//                     }
//                     switch (response.data.isAvailableInNL) {
//                         case true:
//                             updatedState = {
//                                 ...discData,
//                                 isAvailableInNLForm: "true",
//                             }
//                             break
//                         case false:
//                             updatedState = {
//                                 ...discData,
//                                 isAvailableInNLForm: "false",
//                             }
//                     }
                    console.log("updatedState: ")

                    // console.log(updatedState);
                    // setDiscData(updatedState);
                    console.log("discData 2: ")
                    console.log(discData);

                } catch (error) {
                    console.error("een error met data ophalen", error);
                }
                ;
            }

            fetchData();
        }, []
    )

    console.log("hier komt het weer")
    console.log(discData);
    console.log("dit was het");


    return (
        <div>
            {teksttest}
            {discData ? <DiscAddForm preloadedValues={discData}/> : <div>Loading...</div>}
        </div>
    );
}

export default DiscApproveForm;