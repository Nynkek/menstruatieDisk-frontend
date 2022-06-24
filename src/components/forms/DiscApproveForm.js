import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./form.css";
import DiscAddForm from "./DiscAddForm";

function DiscApproveForm({pendingDiscId, teksttest}) {
    const [discId, setDiscId] = useState(10);
    const [discData, setDiscData] = useState({});

useEffect(() => {
    fetchData();
    async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:8080/pendingdiscs/${discId}`);
            console.log(response.data);
            // setDiscData(response.data);
            setDiscData({
                // createdDateForm: response.data.createdData,
                nameForm: response.data.name,
                brandForm: response.data.brand,
                // modelForm: response.data.model,
                modelForm: "test",
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
                usernameForm: response.data.username,
            });
        } catch (error) {
            console.error("een error met data ophalen", error);
        };
    }
},[])
    console.log("hier komt het weer")
    console.log(discData);
    console.log("dit was het");
    const preloadedValues = {
        createdDateForm: "test",
        nameForm: "test",
        brandForm: discData.brandForm,
        modelForm: "test",
        widthForm: "test",
        capacityForm: "test",
        rimWidthForm: "test",
        isReusableForm: "test",
        hasStemForm: "test",
        designFeatureForm: "test",
        shapeForm: "test",
        firmnessForm: "test",
        linkToReviewForm: "test",
        linkToStoreForm: "test",
        imageForm: "test",
        isAvailableInNLForm: "test",
        materialForm: "test",
        usernameForm: "test",
    }

    // setDiscId(pendingDiscId);
    console.log(discData.brand);

//     axios.get(`http://localhost:8080/pendingdiscs/${discId}`)
//         .then((response) => {
//             console.log(response.data);
//             setDiscData(response.data);
//             setDiscData({
//                 createdDateForm: response.data.createdData,
//                 nameForm: response.data.name,
//                 brandForm: response.data.brand,
//                 modelForm: response.data.model,
//                 widthForm: response.data.width,
//                 capacityForm: response.data.capacity,
//                 rimWidthForm: response.data.rimWidth,
//                 isReusableForm: response.data.isReusable,
//                 hasStemForm: response.data.hasStem,
//                 designFeatureForm: response.data.designFeature,
//                 shapeForm: response.data.shape,
//                 firmnessForm: response.data.firmness,
//                 linkToReviewForm: response.data.linkToStore,
//                 linkToStoreForm: response.data.linkToReview,
//                 imageForm: response.data.image,
//                 isAvailableInNLForm: response.data.isAvailableInNL,
//                 materialForm: response.data.material,
//                 usernameForm: response.data.username,
//             });
//             // console.log(preloadedValues)
//             console.log("test")
//         }).catch(error => {
//         console.error('There was an error!', error);
//     });


    // fetchData();
    return (
        <div>
            {teksttest}
            <DiscAddForm preloadedValues={discData}/>
        </div>
    );
}

export default DiscApproveForm;