import React from 'react';
import imageProfil from './../../images/woman-6064819_640.jpg';
import Linkdilnimage from './../../images/174857 (1).png';
import './Apropos.css';

const Apropos = () => {

    return (
        <div className="apropos">

           
                <div className="display-flex">
                    <div className="flex-col">


                    <div className="profil-container">
                        <img src={imageProfil} alt=" " 
                        
                        />
                        <div    >

                        <h2>Gorgina</h2>
                        <p>Nous sommes des amateurs des <br/>
                            biijoux nox bijoux son<br/>
                            t faites à la main.</p>
                        </div >
                        <img src={Linkdilnimage} alt="" className="link-image" />

                    </div>
                    <div className="profil-container">

                        <img src={imageProfil} alt=" "    />
                        <div  >

                        <h2>Gorgina</h2>
                        <p>Nous sommes des amateurs des <br/>
                            biijoux nox bijoux son<br/>
                            t faites à la main.</p>
                        </div>
                        <img src={Linkdilnimage} alt=""  
                        className="link-image" />

                    </div>
                        </div>


                    <div className="profil-dec">
                        <h2>L'équipe</h2>
                        <p>Nous sommes des amateurs des biijoux nox bijoux sont faites à la main<br/>
                            Nous sommes des amateurs des biijoux nox bijoux sont faites à la mai<br/>
                            Nous sommes des amateurs des biijoux nox bijoux sont faites à la <br/>
                            mai<br/>
                            <br/>
                            Nous sommes des amateurs des biijoux nox bijoux sont faites à la maNous sommes<br/> 
                            des amateurs des biijoux nox bijoux sont faites à<br/><br/>

                            la maiNous ommes des amateurs des biijoux nox bijoux sont faites à la mai<br/> 
                            Nous sommes des amateurs des biijoux nox bijoux sont faites à la maiNous<br/><br/>
                            sommes des amateurs des biijoux nox bijoux sont faites à la mai<br/><br/>

                            Nous sommes des amateurs des biijoux nox bijoux sont faites à la maiNous<br/><br/>
                            sommes des amateurs des biijoux nox bijoux sont faites à la mai</p>
                    </div>

                </div>
            
           


        </div>
    )

}

export default Apropos;