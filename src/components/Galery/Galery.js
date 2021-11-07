import React from 'react';
import sac from './../../images/red-2842438_1280.jpg';
import boucleLongue from './../../images/jewel-3990596_1920.jpg';
import serviette from './../../images/towels-3279675_1280.jpg';
import bouclePetit from './../../images/template-3083810_1920.jpg';

const Galery = () => {

    return (
        <div>
            <div className="galery">

                <div className="galery-desc">
                    <h2>this is images</h2>
                    <p className="text-galer">nesciunt at voluptate itaque modi distinctio illum sunt architecto consequuntur, quia incidunt. Hic omnis porro, ullam dolores reiciendis quidem culpa, beatae voluptates ex corrupti, in laudantium? Dignissimos fugit in sequi illo odio cupiditate dolorem veniam iusto dicta ab?
                        Lorem ipsum dolor sit amet consectetur adipisicing sit</p>
                    <p className="text-galer">nesciunt at voluptate itaque modi distinctio illum sunt architecto consequuntur, quia incidunt. Hic omnis porro, ullam dolores reiciendis quidem culpa, beatae voluptates ex corrupti, in laudantium? Dignissimos fugit in sequi illo odio cupiditate dolorem veniam iusto dicta ab?
                        Lorem ipsum dolor sit amet consectetur adipisicing sit</p>
                </div>


                <div className="image-galer">
                    <img src={sac} alt="" />
                    <img src={boucleLongue} alt="" />
                    <img src={serviette} alt="" />
                    <img src={bouclePetit} alt="" />



                </div>
                <div className="galery-desc">
                    <p className="text-galer">nesciunt at voluptate itaque modi distinctio illum sunt architecto consequuntur, quia incidunt. Hic omnis porro, ullam dolores reiciendis quidem culpa, beatae voluptates ex corrupti, in laudantium? Dignissimos fugit in sequi illo odio cupiditate dolorem veniam iusto dicta ab?
                        Lorem ipsum dolor sit amet consectetur adipisicing sit</p>
                    <p className="text-galer"> nesciunt at voluptate itaque modi distinctio illum sunt architecto consequuntur, quia incidunt. Hic omnis porro, ullam dolores reiciendis quidem culpa, beatae voluptates ex corrupti, in laudantium? Dignissimos fugit in sequi illo odio cupiditate dolorem veniam iusto dicta ab?
                        Lorem ipsum dolor sit amet consectetur adipisicing sit</p>
                </div>

            </div>



            {/* <div className="galeryImage">
                <div className="galeryItem item1"></div>
                <div className="galeryItem item2"></div>
                <div className="galeryItem item3">
                  
                </div>
                <div className="galeryItem item4">

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ex nobis vel magnam libero temporibus, veniam distinctio provident eaque assumenda corrupti vero nihil, veritatis rem ipsa sequi iusto cum? Deserunt!</p>
                </div>
                <div className="galeryItem item5"></div>
                <div className="galeryItem item6"></div>
                <div className="galeryItem item7">
                    <img src={imagflexx} alt="" />

                </div>

            </div> */}

        </div>
    )
}

export default Galery