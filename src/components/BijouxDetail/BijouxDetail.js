import React from 'react';
import imageDetail from './../../images/bo-perles-bleu-ciel (1).jpg';
import imageBoucle from './../../images/bo-perles-bleu-ciel.jpg';
import './BijouxDetail.css';
import { useHistory  } from 'react-router';

function BijouxDetail(){
  
        let history = useHistory();
        return (
            <div className="container-bijoux">
                <div className="container-bij-frex">

                
                <div className="detail-images">
                    <div className="imag">Boucles d'oreilles</div>
                    <div className="imag">Boucles d'oreilles</div>
                    <div className="imag">Boucles d'oreilles</div>
                </div>
                <div className="boucl-image" >
                    <img src={imageBoucle} alt="" className="image-princil" />


                </div>
                <div className="description-bijoux">
                    <h2>Boucles d'oreilles</h2>
                    <p>iurhge rth kgh ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth
                        iurhge rth kgh<br/> <br/> ghq gi eorq erh hr rqoirh
                   
                   

                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth
                        iurhge rth kgh<br/><br/>  ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth 
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih gmqer <br/><br/> eep oerih tlgh
                    oerriqeri heriohi se oeirhoh ioth
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih 
                    </p>
                    <button onClick={() => {
                        history.push('/Commentaire')
                    }}> Commentaires</button>
                
                    <button onClick={() => {
                        history.push("/Bijoux-Articles")
                        }} type="button">Retour au articles</button>
                </div>
                </div>
             


                <div className="container-bij-flex">
                    <div  >
                        <img src={imageDetail} alt=""  className="imag-container"/>
                    </div>
                    <div className="container-desc">
                        <p>     <p> iurhge rth kgh ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth
                        iurhge rth kgh<br/><br/>  ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth 
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih gmqer <br/><br/> eep oerih tlgh
                    oerriqeri heriohi se oeirhoh ioth
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih </p></p>
                    </div>
                    <div  className="container-desc"  >
                        <p>     <p> iurhge rth kgh ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth
                        iurhge rth kgh<br/><br/>  ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth 
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih gmqer <br/><br/> eep oerih tlgh
                    oerriqeri heriohi se oeirhoh ioth
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih </p></p>
                    </div>

                </div>
                <div className="container-bij-flex">
                    <div  >
                        <img src={imageDetail} alt="" className="imag-container" />
                    </div>
                    <div  className="container-desc">
                        <p>     <p> iurhge rth kgh ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth
                        iurhge rth kgh<br/><br/>  ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth 
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih gmqer <br/><br/> eep oerih tlgh
                    oerriqeri heriohi se oeirhoh ioth
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih </p></p>
                    </div>
                    <div  className="container-desc">
                        <p>     <p> iurhge rth kgh ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth
                        iurhge rth kgh<br/><br/>  ghq gi eorq erh hr rqoirh
                        oeighqeoih gmqer eep oerih tlgh
                        oerriqeri heriohi se oeirhoh ioth 
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih gmqer <br/><br/> eep oerih tlgh
                    oerriqeri heriohi se oeirhoh ioth
                    iurhge rth kgh ghq gi eorq erh hr rqoirh
                    oeighqeoih </p></p>
                    </div>

                </div>
















                <span className="C2etoiles">
                    <div></div>

                    <span className="C2etoiles">
                        <div></div>

                        <span className="C2etoiles">
                            <div></div>

                            <span className="C2etoiles">
                                <div></div>

                                <span className="C2etoiles">
                                    <div></div>
                             
                                </span>
                            </span>
                        </span>
                    </span>
                </span>




            </div>



        )
    }


export default BijouxDetail;