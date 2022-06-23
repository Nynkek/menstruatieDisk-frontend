import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./form.css";


function DiscAddForm() {
    const {register, formState: {errors}, handleSubmit} = useForm({mode: 'onBlur'});
    const [addSuccess, toggleAddSuccess] = useState(false)
    const [createdDate, setCreatedDate] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [width, setWidth] = useState('');
    const [capacity, setCapacity] = useState('');
    const [rimWidth, setRimWidth] = useState('');
    const [isReusable, toggleIsReusable] = useState(false);
    const [hasStem, toggleHasStem] = useState(false);
    const [designFeature, setDesignFeature] = useState('');
    const [shape, setShape] = useState('');
    const [firmness, setFirmness] = useState('');
    const [linkToStore, setLinkToStore] = useState('');
    const [linkToReview, setLinkToReview] = useState('');
    const [image, setImage] = useState('');
    const [isAvailableInNL, toggleIsAvailableInNL] = useState(false);
    const [material, setMaterial] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    // const formData = new FormData();
    //
    // formData.append("name", name);
    // formData.append("file", selectedFile);
    // https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react




    async function onSubmit(e) {
        setCreatedDate(e.createdDateForm)
        setName(e.nameForm);
        setBrand(e.brandForm);
        setModel(e.modelForm);
        setWidth(e.widthForm);
        setCapacity(e.capacityForm);
        setRimWidth(e.rimWidthForm);
        toggleIsReusable(e.isReusableForm);
        toggleHasStem(e.hasStemForm);
        setDesignFeature(e.designFeatureForm);
        setShape(e.shapeForm);
        setFirmness(e.firmnessForm);
        setLinkToStore(e.linkToReviewForm);
        setLinkToStore(e.linkToStoreForm);
        setImage(e.imageForm[0]);
        toggleIsAvailableInNL(e.isAvailableInNLForm);

        switch (e.materialForm) {
            case "silicone":
                setMaterial(0);
                break;
            case "polymer":
                setMaterial(1);
                break
            case "anders":
            default:
        }
        // if (image.size > 1024) {
        //     onFileSelectError({error: "File size cannot exceed more than 1MB"})
        // } else {
        //     onFileSelectSuccess(file)
        // }

        try {
            const response = await axios.post("http://localhost:8080/pendingdiscs/addDisc", {
                createdDate: createdDate,
                name: name,
                brand: brand,
                model: model,
                width: width,
                capacity: capacity,
                rimWidth: rimWidth,
                isReusable: isReusable,
                hasStem: hasStem,
                designFeature: designFeature,
                shape: shape,
                firmness: firmness,
                linkToStore: linkToStore,
                linkToReview: linkToReview,
                image: image,
                isAvailableInNL: isAvailableInNL,
                material: material,
            },);
            console.log(response.data);
            toggleAddSuccess(true);
            // navigate("/inloggen");
        } catch (error) {
            console.error('There was an error!', error);
        }
        ;
    }

    return (
        <div className="discAddForm">

            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="details-name">
                    Naam:<br/>
                    <input type="text"
                           placeholder="Hoe noemen jullie je disks?"
                           id="details-name"
                           {...register("nameForm", {maxLength: 80})} />
                </label>
                <label htmlFor="details-brand">Merk
                    <input type="text" placeholder="Merknaam"
                           id="details-brand"
                           {...register("brandForm", {
                               required: true,
                               maxLength: 100
                           })} />
                </label>
                <label htmlFor="details-model">Model
                    <input type="text"
                           placeholder="bijv M, S, of OS (one size)"
                           id="details-model"
                           {...register("modelForm", {required: true})} />
                </label>
                <label htmlFor="details-width">Breedte
                    <input type="number" placeholder="Breedte (in mm)"
                           id="details-width"
                           {...register("widthForm", {
                               required: true,
                               max: 100,
                               min: 0,
                               maxLength: 3
                           })} />
                </label>
                <label htmlFor="details-capacity">Inhoud (in ml)
                    <input type="number" placeholder="Inhoud (ml)"
                           id="details-capacity"
                           {...register("capacityForm", {
                               required: true,
                               max: 100,
                               min: 0,
                               maxLength: 3
                           })} />
                </label>
                <label htmlFor="details-rimWidth">Randdikte (mm)
                    <input type="number" placeholder="Randdikte (mm)"
                           id="details-rimWidth"
                           {...register("rimWidthForm", {
                               required: true,
                               max: 100,
                               min: 0,
                               maxLength: 2
                           })} />
                </label>
                <label htmlFor="details-isReusable" className="checkbox">
                    <input type="checkbox" placeholder="is herbruikbaar"
                           id="details-isReusable"
                           {...register("isReusableForm", {})} />
                    <span className="checkmark"></span>Is herbruikbaar?
                </label>
                <label htmlFor="details-designFeature">Opvallende design-keuzes?
                    <textarea
                        id="details-designFeature"
                        {...register("designFeatureForm", {
                            required: true,
                            maxLength: 80
                        })} />
                </label>
                <label htmlFor="details-hasStem" className="checkbox">
                    <input type="checkbox"
                           placeholder="heeft steeltje/lusje/touwtje"
                           id="details-hasStem"
                           {...register("hasStemForm", {required: true})} />
                    <span className="checkmark"></span>Heeft een steeltje/lusje/touwtje?
                </label>
                <label htmlFor="details-shape">Vorm
                    <input type="text" placeholder="Vorm (rond, ovaal?)"
                           id="detailsshape"
                           {...register("shapeForm", {
                               required: true,
                               maxLength: 80
                           })} />
                </label>
                <label htmlFor="details-firmness">Hardheid
                    <select
                        id="details-firmness"
                        {...register("firmnessForm",
                            {required: true})}>
                        <option value="zacht">zacht</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>
                </label>
                <label htmlFor="details-linkToStore">Link naar (web)winkel
                    <input type="url"
                           placeholder="Link naar webwinkel"
                           id="details-linkToStore"
                           {...register("linkToStoreForm", {maxLength: 800})} />
                </label>
                <label htmlFor="details-linkToReview">Link naar een review
                    <input type="url"
                           placeholder="Link naar een review"
                           id="details-linkToReview"
                           {...register("linkToReviewForm", {maxLength: 800})} />
                </label>
                <label htmlFor="details-image">Afbeelding URL
                    <input type="file" placeholder="Afbeelding"
                           id="details-image"
                           {...register("imageForm", {})} />
                </label>
                <label htmlFor="details-isAvailableInNL" className="checkbox">
                    <input type="checkbox"
                           placeholder="is in een Nederlandse (web)winkel te koop?"
                           id="details-isAvailableInNL"
                           {...register("isAvailableInNLForm", {})} />
                    <span className="checkmark"></span> Is in NL te koop.
                </label>
                <label htmlFor="details-material">Gemaakt van?
                    <select
                        id="details-material"
                        {...register("materialForm", {required: true})}>
                        <option value="polymer">polymer</option>
                        <option value=" silicone">silicone</option>
                        <option value="anders">anders</option>
                    </select>
                </label>
                <label htmlFor="details-createdDate">Verstuurd op
                    <input type="datetime-local" placeholder="Datum"
                           id="details-createdDate"
                           {...register("createdDateForm", {})} />
                </label>
                <label htmlFor="details-username">Wie?
                    <input type="text"
                           placeholder="Wie verstuurt dit formulier?"
                           id="details-username"
                           {...register("usernameForm", {})} />
                </label>
                <button type="submit">Verstuur disk-gegevens</button>
            </form>
            {addSuccess === true && <p>Disc is verstuurd ter goedkeuring! Je mag de pagina sluiten.</p>}

        </div>
    );
}

export default DiscAddForm;