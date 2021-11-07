import React from 'react';
import { Link } from 'react-router-dom';




const NavBar = () => {

    // const [showLinks, setShowLinks] = useState(true);

    // const handleShowLinks = () => {
    //     setShowLinks(!showLinks)
    // }



    const style = {
        textDecoration: 'none',
        color: 'black'

    }


    return (

        <div className="navBarr">

            <div className="nav-Bar">
                <div className='navitems'>

                    <div className="logo ">
                        <span>Logo</span><br />
                        <span className="fashion">Fashion</span>

                    </div>

                    <nav className='navbar'>
                        <ul className='listpuce'>
                            <Link to="/Commentaire" style={style}>
                                <li className="item">Commentaires</li>
                            </Link>
                            <Link to="/Inscription" style={style}>
                                <li className="item">Inscription</li>
                            </Link>
                            <Link to="/Connexion" style={style}>
                                <li className="item">Connexion</li>
                            </Link>

                        </ul>

                    </nav>
                </div>
            </div>

            <div className='sousNav'>
                <ul >
                    <Link to="/" style={style} >

                        <li className="item">Accueil</li>
                    </Link>
                    <Link to="Bijoux-Articles" style={style} >

                        <li className="item">Bijoux</li>
                    </Link>
                    <Link to="Couture-Articles" style={style}>
                        <li className="item">Couture</li>
                    </Link>
                    <Link to="Apropos" style={style}>

                        <li className="item" >A propos</li>
                    </Link>

                </ul>

            </div>
        </div>





        // <div className="header">
        //     <div className="header__content">

        //         <h2 className="navbar__logo">Logo</h2>

        //     </div>
        //     <nav className="navbar">
        //         <ul className={showLinks ? "nav-links-mobile" : "navbar__links"}>
        //             <Link to="/" style={style} >

        //                 <li className="navbar__item">Accueil</li>
        //             </Link>
        //             <Link to="Bijoux-Articles" style={style} >

        //                 <li className="navbar__item">Bijoux</li>
        //             </Link>
        //             <Link to="Couture-Articles" style={style}>
        //                 <li className="navbar__item">Couture</li>
        //             </Link>
        //             <Link to="Apropos" style={style}>

        //                 <li className="navbar__item" >A propos</li>
        //             </Link>


        //         </ul>
        //         <button >CTA pages</button>
        /* <button className="navbar__burger"
            onClick={handleShowLinks}>
            <span className="burger-bar"></span>
 
        </button>  */

        //     </nav>
        //     <FontAwesomeIcon  icon={faHome}/>
        //     <div className="header__content__toggle">
        //         {FaTwitter}

        //     </div>
        // </div>

        // <div className="navbar">
        /* <div className="logo ">
            <span>Logo</span><br />
            <span className="fashion">Fashion</span>

        </div>
        <ul className= {isMobile ? "nav-links-mobile" : 
        "nav-links"}>
            <Link to="/" style={style} >

                <li className="item active">Accueil</li>
            </Link>
            <Link to="Bijoux-Articles" style={style} >

                <li className="item">Bijoux</li>
            </Link>
            <Link to="Couture-Articles" style={style}>
                <li className="item">Couture</li>
            </Link>
            <Link to="Apropos" style={style}>

                <li className="item" >A propos</li>
            </Link>

        </ul> */

        /* <div className="nav-Bar"> */





        /* 
            <nav className="first-nav center">
                <ul >


                </ul>
            </nav> */
        /* <nav className="second-nav">
             <ul >
             <Link to ="/Commentaire" style={style}>
                 <li className="item">Commentaires</li>
                 </Link>
                 <Link to ="/Inscription" style={style}>
                 <li className="item">Inscription</li>
                 </Link>
                 <Link to ="/Connexion" style={style}>
                 <li className="item">Connexion</li>
                 </Link>
               
             </ul>

         </nav>
          */
        /* </div> 
        
        </div>
        */

    )
}

export default NavBar;



