import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./form.css";


function DiscAddForm({preloadedValues}) {
    const {register, formState: {errors}, handleSubmit} = useForm({defaultValues: preloadedValues});
    const [discData, setDiscData] = useState({});
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

    // setDiscData({
    //     createdDateForm: preloadedValues.createdData,
    //     nameForm: preloadedValues.name,
    //     brandForm: preloadedValues.brand,
    //     modelForm: preloadedValues.model,
    //     widthForm: preloadedValues.width,
    //     capacityForm: preloadedValues.capacity,
    //     rimWidthForm: preloadedValues.rimWidth,
    //     isReusableForm: preloadedValues.isReusable,
    //     hasStemForm: preloadedValues.hasStem,
    //     designFeatureForm: preloadedValues.designFeature,
    //     shapeForm: preloadedValues.shape,
    //     firmnessForm: preloadedValues.firmness,
    //     linkToReviewForm: preloadedValues.linkToStore,
    //     linkToStoreForm: preloadedValues.linkToReview,
    //     imageForm: preloadedValues.image,
    //     isAvailableInNLForm: preloadedValues.isAvailableInNL,
    //     materialForm: preloadedValues.material,
    //     usernameForm: preloadedValues.username,
    // });
    console.log("disk data komt hieronder");
    console.log(discData);
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
        setLinkToReview(e.linkToReviewForm);
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

    }

    return (
        <div className="discAddForm">

            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="details-name">
                    Naam
                    <input type="text"
                           className={errors.nameForm && 'field-error'}
                           placeholder="Hoe noemen jullie je disks?"
                           id="details-name"
                           {...register("nameForm", {maxLength: 80})} />
                </label>
                {errors.nameForm && <p className="error-label">{errors.nameForm.message}</p>}<label htmlFor="details-brand">Merk
                <input type="text" placeholder="Merknaam"
                       id="details-brand"
                       className={errors.brandForm && 'field-error'}
                       {...register("brandForm", {
                           required: "Veld mag niet leeg zijn.",
                           maxLength: 100
                       })} />
            </label>
                {errors.brandForm && <p className="error-label">{errors.brandForm.message}</p>}
                <label htmlFor="details-model">Model
                    <input type="text"
                           className={errors.modelForm && 'field-error'}
                           placeholder="bijv M, S, of OS (one size)"
                           id="details-model"
                           {...register("modelForm", {required: "Veld mag niet leeg zijn."})} />
                </label>
                {errors.modelForm && <p className="error-label">{errors.modelForm.message}</p>}
                <label htmlFor="details-width">Breedte (mm)
                    <input type="number" placeholder="Breedte (in mm)"
                           className={errors.widthForm && 'field-error'}
                           id="details-width"
                           {...register("widthForm", {
                               required: "Veld mag niet leeg, moet een getal zijn en mag geen komma's bevatten.",
                               max: {
                                   value: 100,
                                   message: "kan niet meer dan 100 zijn",
                               },
                               min: {
                                   value: 0,
                                   message: "kan niet minder dan 0 zijn",
                               },
                               maxLength: {
                                   value: 3,
                                   message: "het moet in mm, dus kan niet meer dan 3 karakters hebben.",
                               }
                           })} />
                </label>
                {errors.widthForm && <p className="error-label">{errors.widthForm.message}</p>}
                <label htmlFor="details-capacity">Inhoud (ml)
                    <input type="number" placeholder="Inhoud (ml)"
                           id="details-capacity"
                           className={errors.capacityForm && 'field-error'}
                           {...register("capacityForm", {
                               required: "Veld mag niet leeg, moet een getal zijn en mag geen komma's bevatten.",
                               max: {
                                   value: 100,
                                   message: "kan niet meer dan 100 zijn",
                               },
                               min: {
                                   value: 0,
                                   message: "kan niet minder dan 0 zijn",
                               },
                               maxLength: {
                                   value: 3,
                                   message: "het moet in mm, dus kan niet meer dan 3 karakters hebben.",
                               }
                           })} />
                </label>
                {errors.capacityForm && <p className="error-label">{errors.capacityForm.message}</p>}
                <label htmlFor="details-rimWidth">Randdikte (mm)
                    <input type="number" placeholder="Randdikte (mm)"
                           id="details-rimWidth"
                           className={errors.rimWidthForm && 'field-error'}
                           {...register("rimWidthForm", {
                               required: "Veld mag niet leeg, moet een getal zijn en mag geen komma's bevatten.",
                               max: {
                                   value: 100,
                                   message: "kan niet meer dan 100 zijn",
                               },
                               min: {
                                   value: 0,
                                   message: "kan niet minder dan 0 zijn",
                               },
                               maxLength: {
                                   value: 2,
                                   message: "het moet in mm, dus kan niet meer dan 2 karakters hebben.",
                               }
                           })} />
                </label>
                {errors.rimWidthForm && <p className="error-label">{errors.rimWidthForm.message}</p>}
                <div className="radio-container">
                <span className="label">Is herbruikbaar</span>
                    <div className="radio-btn-option">
                        <label className="radio">
                            <input className={errors.isReusableForm && 'field-error'}
                               {...register("isReusableForm",
                                   {required: "Kies een optie"})} type="radio" value="yes"/>
                            Ja</label>
                    </div>
                    <div className="radio-btn-option">
                        <label className="radio">
                        <input className={errors.isReusableForm && 'field-error'}
                               {...register("isReusableForm",
                                   {required: "Kies een optie"})} type="radio" value=" no"/>
                            Nee</label>
                    </div></div>
                {errors.isReusableForm && <p className="error-label">{errors.isReusableForm.message}</p>}


                <label htmlFor="details-designFeature">Opvallende design-keuzes?
                    <textarea
                        id="details-designFeature"
                        className={errors.designFeatureForm && 'field-error'}
                        {...register("designFeatureForm", {
                            required: "Veld mag niet leeg zijn.",
                            maxLength: 80
                        })} />
                </label>
                {errors.designFeatureForm && <p className="error-label">{errors.designFeatureForm.message}</p>}


                <div className="radio-container">
                    <span className="label">Heeft steeltje, lusje of touwtje?</span>
                    <div className="radio-btn-option">
                        <label className="radio">
                            <input className={errors.hasStemForm && 'field-error'}
                                   {...register("hasStemForm",
                                       {required: "Kies een optie"})} type="radio" value="yes"/>
                            Ja</label>
                    </div>
                    <div className="radio-btn-option">
                        <label className="radio">
                            <input className={errors.hasStemForm && 'field-error'}
                                   {...register("hasStemForm",
                                       {required: "Kies een optie"})} type="radio" value=" no"/>
                            Nee</label>
                    </div></div>
                {errors.hasStemForm && <p className="error-label">{errors.hasStemForm.message}</p>}

                <label htmlFor="details-shape">Vorm
                    <input type="text" placeholder="Rond, ovaal, andere vorm?"
                           id="details-shape"
                           className={errors.shapeForm && 'field-error'}
                           {...register("shapeForm", {
                               required: "Veld mag niet leeg zijn.",
                               maxLength: 80
                           })} />
                </label>
                {errors.shapeForm && <p className="error-label">{errors.shapeForm.message}</p>}
                <label htmlFor="details-firmness">Hardheid
                    <select
                        id="details-firmness"
                        className={errors.firmnessForm && 'field-error'}
                        {...register("firmnessForm",
                            {required: "Veld mag niet leeg zijn."})}>
                        <option value="zacht">zacht</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>
                </label>
                {errors.firmnessForm && <p className="error-label">{errors.firmnessForm.message}</p>}
                <label htmlFor="details-linkToStore">Link naar (web)winkel
                    <input type="url"
                           className={errors.linkToStoreForm && 'field-error'}
                           placeholder="Link naar webwinkel"
                           id="details-linkToStore"
                           {...register("linkToStoreForm", {maxLength: 800})} />
                </label>
                {errors.linkToStoreForm && <p className="error-label">{errors.linkToStoreForm.message}</p>}
                <label htmlFor="details-linkToReview">Link naar een review
                    <input type="url"
                           className={errors.linkToReviewForm && 'field-error'}
                           placeholder="Link naar een review"
                           id="details-linkToReview"
                           {...register("linkToReviewForm", {maxLength: 800})} />
                </label>
                {errors.linkToReviewForm && <p className="error-label">{errors.linkToReviewForm.message}</p>}
                <label htmlFor="details-image">Afbeelding URL
                    <input type="file" placeholder="Afbeelding"
                           id="details-image"
                           className={errors.imageForm && 'field-error'}
                           {...register("imageForm", {})} />
                </label>
                {errors.imageForm && <p className="error-label">{errors.imageForm.message}</p>}

                <div className="radio-container">
                    <span className="label">Is in een Nederlandse (web)winkel te koop?</span>
                    <div className="radio-btn-option">
                        <label className="radio">
                            <input className={errors.isAvailableInNLForm && 'field-error'}
                                   {...register("isAvailableInNLForm",
                                       {required: "Kies een optie"})} type="radio" value="yes"/>
                            Ja</label>
                    </div>
                    <div className="radio-btn-option">
                        <label className="radio">
                            <input className={errors.isAvailableInNLForm && 'field-error'}
                                   {...register("isAvailableInNLForm",
                                       {required: "Kies een optie"})} type="radio" value=" no"/>
                            Nee</label>
                    </div></div>
                {errors.isAvailableInNLForm && <p className="error-label">{errors.isAvailableInNLForm.message}</p>}

                <label htmlFor="details-material">Gemaakt van?
                    <select
                        id="details-material"
                        className={errors.materialForm && 'field-error'}
                        {...register("materialForm", {required: "Veld mag niet leeg zijn."})}>
                        <option value="polymer">polymer</option>
                        <option value=" silicone">silicone</option>
                        <option value="anders">anders</option>
                    </select>
                </label>
                {errors.materialForm && <p className="error-label">{errors.materialForm.message}</p>}
                <label htmlFor="details-createdDate">Verstuurd op
                    <input type="datetime-local" placeholder="Datum"
                           id="details-createdDate"
                           pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                           className={errors.createdDateForm && 'field-error'}
                           {...register("createdDateForm", {})} />
                </label>
                {errors.createdDateForm && <p className="error-label">{errors.createdDateForm.message}</p>}
                <label htmlFor="details-username">Wie?
                    <input type="text"
                           placeholder="Wie verstuurt dit formulier?"
                           id="details-username"
                           className={errors.usernameForm && 'field-error'}
                           {...register("usernameForm", {})} />
                </label>
                {errors.usernameForm && <p className="error-label">{errors.usernameForm.message}</p>}
                <button type="submit">Verstuur disk-gegevens</button>
            </form>
            {addSuccess === true && <p>Disc is verstuurd ter goedkeuring! Je mag de pagina sluiten.</p>}

        </div>
    );
}

export default DiscAddForm;