import React, { Component } from 'react';
 
import './Inscription.css';


//  j'ai definis une class qui s'appel Inscription et qui va extendre from Component


// const initialState = {
//     pseudo: '',
//     email: '',
//     password: '',
//     formErrors: {}
//   };

  
class Inscription extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pseudo: "",
            email: "",
            password: "",
            formErrors : {},
        }
        // pour que this face bien reference a la bon chose il faut faur bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     
    //   this.state = initialState;
        this.initialState = this.state;
    }


 
    // gerer les erreurs
    handleFormValidation = () => {
        const {pseudo, email, password} = this.state;
        let formErrors = {};
        let formIsValid = true;

   

        // verifier le saisi de pseudo
        if(!pseudo) {
            formIsValid = false;
            formErrors["pseudoErrors"] = "pseudo is required";
        }
        if(pseudo.trim().length < 6){
            formIsValid = false;
            // I used the Array like notation
            formErrors["pseudoLength"] = "pseudo must be of length 6 or higher"
        }

        // verifier l'email
        if(!email) {
            formIsValid = false;
            formErrors["emailErrors"] = "pseudo is required";
        }

        // verifier le password
        if(!password) {
            formIsValid = false;
            formErrors["passwordErrors"] = "pseudo is required";
        }

        // I update the state and gave it the error object
        this.setState({
            formErrors: formErrors
        });
        return formIsValid;
    }
  


    // permet de changer les data insere par l'utilisateur
        handleChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
        }

        // eviter le chargement de la page
        handleSubmit = (e) =>{
        
            
           console.log(e.target.name)
           console.log(e.target.value)
            e.preventDefault();
         
            if (this.handleFormValidation()){
              
                // this.state = initialState;
                this.setState(this.initialState)
            }
                  }

        handleClick = () =>{
            this.props.history.push('/Connexion');
        }
        

    
    render() {
        // definir le pseudo, password et email 
        const {pseudo, email, password} = this.state;
        // definir les ereurs
        const {pseudoErrors, pseudoLength, emailErrors, passwordErrors} = this.state.formErrors;
        return (
            <div>
                <form className="form-inscription" onSubmit={this.handleSubmit} >

                    <h2>Inscription</h2>
                    <div className="form-group">

                        <input
                            type="pseudo"
                            className="form-control"
                            name="pseudo"
                            placeholder="Inserze votre pseudo"
                            value={pseudo}
                            onChange={this.handleChange}
                        />
                     
                        {pseudoErrors && <div style={{color: "red"}}>{pseudoErrors}</div>}
                        {pseudoLength && <div style={{color: "red"}}>{pseudoLength}</div>}




                    </div>
                    <div className="form-group">

                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Inserze votre email"
                            value={email}
                            onChange={this.handleChange}
                        />
                         {emailErrors && <div style={{color: "red"}}>{emailErrors}</div>}

                    </div>

                    <div className="form-group">

                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Inserez votre mot de pass"
                            value={password}
                            onChange={this.handleChange}
                        />
                         {passwordErrors && <div style={{color: "red"}}>{passwordErrors}</div>}

                    </div>




                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
                <div className="deja-membre">
                    <p>Déjà memebre connectez vous! </p>


                    <button className="connexion-button"
                    onClick={this.handleClick}


                    >Connexion</button>
                </div>



            </div>
        )
    }

}

export default Inscription;
    // a component state that will control the value of the input element
    // passer la props dans le contructor et la recuperer dans la fonction super()
    // constructor(props){
    //     super(props);

    //         this.state = {

    //             // new state property
    //             // pseudo is a new state property that is initialized into
    //             //  an empty string then assigne it to the value
    //             pseudo: '',
    //             email: '',
    //             password: '',
    //             // ici j'ai passé un objet
    //             formErrors : {}


    //         };
    //         // initialState is passed as a reference to this.state, 
    //         // so whenever you change state you also change initialState 

    //         this.initialState = this.state;


    // }
    // // form validation 
    // handleFormaValidation = () =>{
    //     const { pseudo, email, password}  = this.state
    //     let formErrors = {};
    //     let formIsValid = true;

    //     // verify pseudo
    //     if(!pseudo){
    //         formIsValid = false;
    //         formErrors["pseudoErro"] = "Name is required";
    //     }

    //     // Verify email
    //     if(!email){
    //         formIsValid = false;
    //         formErrors["emailErro"] = "Email is required";

    //     }

    //     // verify password
    //     if(!password){
    //         formIsValid = false;
    //         formErrors["passewordErro"] = "password is required";
    //     }

    //     this.setState({
    //         formErrors: formErrors
    //     }); 
    //     return formIsValid;
    // }

    // // this arrow function takes e as an argument 
    //    handleChange = e =>{
    //        this.setState({
    //         //    here i target all input with the name
    //           [e.target.name] : e.target.value
    //        })
    //    }

    //    handleSubmit = event =>{

    //        event.preventDefault();
    //        if(this.handleFormaValidation()){
    //            alert('you have succefully register')
    //            this.setState(this.initialState)
    //        }



    //    }









// this function to change the path when we click on the button
//  handleClick = e =>{
//      this.props.history.push("/Connexion");
//  }



        // // here i assigned and defin that errors to formErrors
        // const { pseudoErro, emailErro, passewordErro} = this.state.formErrors;
        // // here i assinged this props to the state
        // const {pseudo, email, password } = this.state;





















// <div className="insc-container" >


// <form className="form-inscription"
// onSubmit={this.handleSubmit}
// >

//     <h2>Inscription</h2>
//     <div className="form-group">

//         <input 
//             type="pseudo"
//             c className="form-control"
//             name = "pseudo"
//             placeholder="Pseudo"
//             value={pseudo}
//             onChange={this.handleChange}


//         />
//         {/* add an error if the input is empty */}
//         {pseudoErro && <div style = {{color: "red"}} >{pseudoErro} </div>}



//     </div>
//     <div className="form-group">

//         <input
//             type="email"
//             placeholder="email"
//             className="form-control"
//             name = "email"
//             value={email}
//             onChange={this.handleChange}

//         />
//            {/* add an error if the input is empty */}
//         {emailErro && <div style= {{color: "red" }} >{emailErro}</div>}

//     </div>

//     <div className="form-group">

//         <input
//             type="password"
//             className="form-control"

//             name="password"
//             placeholder="Mot de passe"
//             value={password}
//             onChange={this.handleChange}


//         />
//            {/* add an error if the input is empty */}
//         {passewordErro && <div style={{color : "red"}} >{passewordErro}</div>}


//     </div>




//     <button type="submit" className="btn btn-primary">Envoyer</button>
// </form>
// <div className="deja-membre">
//     <p>Déjà memebre connectez vous! </p>


//     <button className="connexion-button" 
//     onClick={this.handleClick}

//    >Connexion</button>
// </div>
