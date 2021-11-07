import React from 'react'
import BouclImagee from './../../images/woman-5563792_1280.jpg';
import Boucllll from './../../images/woman-gac0abc53b_1920.jpg';
import { useHistory } from 'react-router';




const BijouxSection = () => {
    let history = useHistory();
    return (
      
        <div className="Bijoux-section">
            <div className="Bijoux-Desc">
             
                <p>
                    Lorem ipsum, dolor sit amet consectetur <br />
                    adipisicing elit. Soluta incidunt cumque<br />  adipisicing elit.
                    Consectetur,<br /> voluptate? Quisquam debitis
                    assumenda
                    voluptate? Quisquam debitis
                    assumenda<br />
                    voluptate? Quisquam debitis
                    assumenda
                </p>
                <button onClick={() => {
                    history.push('./Bijoux-Articles')
                }}>Plus de produits</button>
            </div>

            <div className="Bijoux-image">
                <img src={BouclImagee} alt="" />


            </div>
            <div className="Bijoux-image">

                <img src={Boucllll} alt="" />
            </div>


        </div>
    )
}

export default BijouxSection;