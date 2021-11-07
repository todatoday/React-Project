import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Commentaire.css';
import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// here I creat a const named color that will take two different colors 
const colors = {
    yellow: "#ffc107",
    grey: "#e4e5e9 ",
};


function Commentaire() {
    // initialise inputs 
    const [values, setValues] = useState({
        ratingValue: "",
        pseudo: "",
        email: "",
        textarea: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleRatingChange = (e) => {

        setValues({ ...values, ratingValue: e.target.value })
    }
    const handlePseudoChange = (e) => {
        setValues({ ...values, pseudo: e.target.value })
    }
    const handleEmailChange = (e) => {
        setValues({ ...values, email: e.target.value })
    }
    const handleCommentaireChange = (e) => {
        setValues({ ...values, textarea: e.target.value })
    }
    
    const [currentValue, setCurrentValue] = useState(null);


    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true);
    }


    // here i creat a const called stars that will take an array of 5 stars that are initially filled with 0
    // const stars = Array(5).fill(null);
    // we actually can creat this const in a different way directly in the code like: 
    // {[...Array(5)].map() => {}}





    return (
        <div>
            <form className="form-inscription"  onSubmit={handleSubmit}  >
                {submitted ? <div className="success-mssage">
                    Votre message à été envoyé</div> : null}

                <h2>Commentaires</h2>
                <div>
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;

                        return (
                            <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    // value={inputs.rating || ""}
                                    value={values.ratingValue}
                                    onChange={handleRatingChange} 
                                    onClick={() => setCurrentValue(ratingValue)}
                                />
                                <FaStar

                                    className="star"

                                    color={currentValue > index ? colors.yellow : colors.grey}


                                />
                            </label>

                        )
                    })}

                </div>








                <div className="form-group">

                    <input
                        type="pseudo"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Votre pseudo"
                        name="pseudo"
                        value={values.pseudo}
                        onChange={handlePseudoChange}


                    // ref={register({ required: true })} 
                    // ref={register}
                    />


                </div>
                <div className="form-group">

                    <input type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Adress email"
                        name="email"
                        value={values.email}
                        onChange={handleEmailChange}


                    // ref={register}
                    // ref={register({ required: true })}
                    />
                </div>

                <div className="form-group">

                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        // ref={register({ required: true })}
                        placeholder="Commentaires" rows="3"
                        name="textarea"
                        value={values.textarea}
                        onChange={handleCommentaireChange}

                    //  {...register('test', { required: true })}
                    //  ref={register}
                    ></textarea>
                </div>



                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>

        </div>
    )
}
export default Commentaire;
