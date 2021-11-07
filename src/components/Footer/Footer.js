import React from 'react';


const Footer = () =>{
    return(
        <div className='footerContainer'>

        <div className="footer">
            <div className="footerItem">
                <h1>Bijoux & Coutures</h1>
                <ul>
                    <li>+06 32 65 98 </li>
                    <li>France, Bourges</li>
                    <li>  N° 12 rue les jours noirs</li>
                </ul>
            </div>
            <div className="vl"></div>

            <div className="footerItem">
                <h1>About</h1>
                <ul>
                    <li>About Us</li>
                    <li>Contactez-nous</li>
                    <li>Follow us on </li>
                    <li>Facebook </li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className="vl"></div>

            <div className="footerItem">
                <h1>STUFF</h1>
                <ul>
                    <li>Protection des données</li>
                    <li>Utilisation des cookies</li>
                    <li>Mention légales</li>
                </ul>
            </div>
            <div className="vl"></div>
        </div>
            <hr className="line"/>
          <p className='copyRight'>©2021 HEYTECH INf | All right reserved | Term Of Servce | Privecy</p>
          

        </div>
    )
}

export default Footer;