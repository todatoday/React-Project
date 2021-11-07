import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar.js';
import Title from '../Title/Title.js';


class Header extends Component {
    render() {
        return (
             <div>
            
               
                <NavBar />
                <hr/>
                {/* <SousNav/> */}
                {/* <BijouxArticles/> */}
                <hr/>
                <Title/>

                 {/* <Presentation /> */}
                {/* <Section />  */}
             </div>
        );
    }
}

export default Header




















// import React, { Component } from 'react';
//import React library 

// class Header extends Component {
    //inside a calss we have a rendre methode that will return something

//     render(){
//         return(
//             <div>

//                 this is my first component
//             </div>
//         )
//     }
// }

// export default Header
//once we create a class we need to export it 

//import React from 'react'
//const Header = () => {
//    return ( <div> Header</div>)
//}