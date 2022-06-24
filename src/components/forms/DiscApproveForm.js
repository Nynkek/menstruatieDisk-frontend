import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./form.css";
import DiscAddForm from "./DiscAddForm";

function DiscApproveForm({pendingDiscId}) {
    const [discData, setDiscData] = useState([]);
    const [discId, setDiscId] = useState([]);

    setDiscId(pendingDiscId);

    useEffect(() => {
            axios.get(`http://localhost:8080/pendingdiscs/${discId}`)
                .then((response) => {
                    setDiscData(response.data);
                    console.log(discData.data);
                }).catch(error => {
                console.error('There was an error!', error);
            });

        }, []);

    return (
        <div>
            <DiscAddForm preloadedValues={discData}/>
        </div>
    );
}

export default DiscApproveForm;