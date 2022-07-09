import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./form.css";
import DiscAddForm from "./DiscAddForm";
import {AuthContext} from "../../context/AuthContext";

function DiscApproveForm({pendingDiscId}) {
    const [discData, setDiscData] = useState(null);
    const [pendingDiscImage, setPendingDiscImage] = useState('');
    const {user: {username}} = useContext(AuthContext);
    const token = localStorage.getItem('token');


    useEffect(() => {

            async function fetchData() {
                try {
                    const response = await axios.get(`http://localhost:8080/pendingdiscs/${pendingDiscId}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    });
                    console.log("response.data: ")
                    console.log(response.data);

                    if (response.data.image) {
                        setPendingDiscImage(response.data.image);
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
                            isAvailableInNLForm: response.data.isAvailableInNL ? "true" : "false",
                            materialForm: response.data.material,
                            imageForm: response.data.image
                        });
                    } else {
                        console.log("niet image")
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
                            isAvailableInNLForm: response.data.isAvailableInNL ? "true" : "false",
                            materialForm: response.data.material,
                        });
                    }


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
            <p>Hey {username}, succes met deze disk controleren!</p>

            {discData ?
                <DiscAddForm preloadedValues={discData} preloadedImage={pendingDiscImage} postLink="discs/addDisc"/> :
                <div>Loading...</div>}
        </div>
    );
}

export default DiscApproveForm;