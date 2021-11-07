import React from 'react';
 
import SacRouge from './../../images/red-2842438_1280.jpg';
import SacBlanc from './../../images/handmade-4926871_1280.jpg';
import { useHistory } from 'react-router';

const CoutureSection = () => {
    let history = useHistory();
    return (
       

        <div className="couture-section">
            <div className="couture-image">
                <img src={SacBlanc} alt="" />
            </div>
            <div className="couture-image">
                <img src={SacRouge} alt="" />

            </div>
            <div className="couture-desc">
                <p>
                    Lorem ipsum, dolor sit amet consectetur <br />
                    adipisicing elit. Soluta incidunt cumquev <br />  adipisicing elit.
                    Consectetur,<br /> voluptate? Quisquam debitis
                    assumenda
                    voluptate? Quisquam debitis
                    assumenda<br />
                    voluptate? Quisquam debitis
                    assumenda
                </p>
                <button onClick={() => {
                    history.push('/Couture-Articles')
                }}>Plus de produits</button>
            </div>


        </div>

    )
}

export default CoutureSection;