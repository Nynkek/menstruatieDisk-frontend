import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./form.css";
import {AuthContext} from "../../context/AuthContext";
import getTodaysDate from "../../helpers/getTodaysDate";


function DiscAddForm({preloadedValues, postLink, preloadedImage}) {
    const {register, formState: {errors}, watch, handleSubmit} = useForm({defaultValues: preloadedValues});
    const {user: {username}, token} = useContext(AuthContext);
    const [addSuccess, toggleAddSuccess] = useState(false);
    const [error, setError] = useState(false);
    const todaysDate = getTodaysDate();
    const imageFormValue = watch("imageForm");


    async function onSubmit(e) {
        // Sla het gekozen bestand op
        const formData = new FormData();
        // Voeg daar ons bestand uit de state aan toe onder de key "file"
        formData.append("image", e.imageForm[0]);


        try {
            const response = await axios.post(`http://localhost:8080/${postLink}`, {
                    createdDate: todaysDate,
                    name: e.nameForm,
                    brand: e.brandForm,
                    model: e.modelForm,
                    width: e.widthForm,
                    capacity: e.capacityForm,
                    rimWidth: e.rimWidthForm,
                    isReusable: e.isReusableForm === "true" ? true : false,
                    hasStem: e.hasStemForm === "true" ? true : false,
                    designFeature: e.designFeatureForm,
                    shape: e.shapeForm,
                    firmness: e.firmnessForm,
                    linkToStore: e.linkToStoreForm,
                    linkToReview: e.linkToReviewForm,
                    // image: e.imageForm[0],
                    isAvailableInNL: e.isAvailableInNLForm === "true" ? true : false,
                    material: e.materialForm === "SILICONE" ? "0" : "1",
                    addedBy: username,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                }
            );
            console.log(response.data);
            const discAddedId = response.data.id;

            console.log("als het goed is is de disk verstuurd...");

            const result = await axios.post(`http://localhost:8080/pendingdiscs/${discAddedId}/photo`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            console.log(result.data);

            toggleAddSuccess(true);
            setError(false);
            // HTMLFormElement.reset();


            // navigate("/inloggen");
        } catch (error) {
            console.error('There was an error!', error);
            setError(true);
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
                {errors.nameForm && <p className="error-label">{errors.nameForm.message}</p>}<label
                htmlFor="details-brand">Merk
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
                                       {required: "Kies een optie"})} type="radio" value="true"/>
                            Ja</label>
                    </div>
                    <div className="radio-btn-option">
                        <label className="radio">
                            <input className={errors.isReusableForm && 'field-error'}
                                   {...register("isReusableForm",
                                       {required: "Kies een optie"})} type="radio" value="false"/>
                            Nee</label>
                    </div>
                </div>
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
                                       {required: "Kies een optie"})} type="radio" value="true"/>
                            Ja</label>
                    </div>
                    <div className="radio-btn-option">
                        <label className="radio">
                            <input className={errors.hasStemForm && 'field-error'}
                                   {...register("hasStemForm",
                                       {required: "Kies een optie"})} type="radio" value="false"/>
                            Nee</label>
                    </div>
                </div>
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
                        defaultValue="medium"
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


                <label htmlFor="details-image">Kies afbeelding
                    <input type="file" placeholder="Afbeelding"
                           id="details-image"
                           className={errors.imageForm && 'field-error'}

                           {...register("imageForm")}
                    />
                </label>


                {imageFormValue ?
                    <>
                        {imageFormValue.length > 0 &&

                            <p>Preview:<br/>
                                <img src={URL.createObjectURL(imageFormValue.item(0))}
                                     alt="Voorbeeld van de afbeelding die zojuist gekozen is"
                                     className="image-preview"/></p>

                        }</>
                    : <>
                        {preloadedImage &&

                            <p>Preview:<br/>
                                <img src={preloadedImage}
                                     alt="Voorbeeld van de afbeelding die zojuist gekozen is"
                                     className="image-preview"/></p>

                        }
                    </>
                }
                {errors.imageForm && <p className="error-label">{errors.imageForm.message}</p>}


                <div className="radio-container">
                    <span className="label">Is in een Nederlandse (web)winkel te koop?</span>
                    <div className="radio-btn-option">
                        <label className="radio">
                            <input className={errors.isAvailableInNLForm && 'field-error'}
                                   {...register("isAvailableInNLForm",
                                       {required: "Kies een optie"})} type="radio" value="true"/>
                            Ja</label>
                    </div>
                    <div className="radio-btn-option">
                        <label className="radio">
                            <input className={errors.isAvailableInNLForm && 'field-error'}
                                   {...register("isAvailableInNLForm",
                                       {required: "Kies een optie"})} type="radio" value="false"/>
                            Nee</label>
                    </div>
                </div>
                {errors.isAvailableInNLForm && <p className="error-label">{errors.isAvailableInNLForm.message}</p>}

                <label htmlFor="details-material">Gemaakt van?
                    <select
                        id="details-material"
                        className={errors.materialForm && 'field-error'}
                        {...register("materialForm", {required: "Veld mag niet leeg zijn."})}>
                        <option value="POLYMER">polymer</option>
                        <option value="SILICONE">silicone</option>
                    </select>
                </label>
                {errors.materialForm && <p className="error-label">{errors.materialForm.message}</p>}

                <button type="submit">Verstuur disk-gegevens als {username}</button>
            </form>

            {addSuccess === true &&
                <p>Disc is verstuurd door {username} op {todaysDate}</p>}
            {error === true &&
                <p>Hey {username}, er is iets mis gegaan. Probeer het opnieuw.</p>}

        </div>
    );
}

export default DiscAddForm;