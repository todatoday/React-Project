import React, { Component } from 'react';



class Connexion extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: {}

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.initialState = this.state;
        
    }
    handleChange = (e) =>{
        this.setState({
          [e.target.name] : e.target.value                
        })     
        
    }
    formValidation = () =>{
        // pull the email and the paswword from our state
        const {email, password } = this.state;
        let isValid = true;
        const errors = {};

        if(!email ){
            isValid = false;
            // i used the dot notation
            errors.emailErrorss ="pseudo is required"
        } 
        
        if(!password) {
            isValid = false;
            errors.passwordErrors = "password is required"
        }
        if(password.trim().length < 6){
            isValid = false;
            errors.passwordErrors = "password must be of length 6 or higher"

        }

        this.setState({errors : errors});
        return isValid;
         
    }
    

    handleSubmit = (e) =>{
        e.preventDefault();
        
        if (this.formValidation()){
              
            // this.state = initialState;
            this.setState(this.initialState)
        }
     
            //  send 
        }
    
    render() {
        const {email, password} = this.state;
        const {emailErrorss, passwordErrors} = this.state.errors;
         
        return (
            <div className="Connexion-container">
                

                <form className="form-inscription" onSubmit={this.handleSubmit}>
                    
                    <h2>Connexion</h2>
                    <div className="form-group">

                        <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        placeholder="Adress email"
                        name="email"
                        value={ email} 
                        onChange={this.handleChange}/>
                      
                      {emailErrorss && <div style={{color: "red"}}>{emailErrorss}</div>}

                    </div>
                    <div className="form-group">

                        <input 
                        type="password" 
                        className="form-control"
                        id="exampleInputPassword1" 
                        placeholder="Mot de passe"
                        name="password"
                        value={ password} 
                        onChange={this.handleChange}/>
                              {passwordErrors && <div style={{color: "red"}}>{passwordErrors}</div>}
                    </div>

                   



                    <button type="submit" className="btn btn-primary">Coonnexion</button>
              

                   {/* {Object.keys(errors).map((key) =>{
                       return (<div key={key}>
                           {errors[key]}

                       </div>)

                   })} */}
                </form>
              


            </div>
        )
    }
}

export default Connexion;