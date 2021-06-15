import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_four from '../resources/images/slide_four.png';
import slide_five from '../resources/images/slide_five.png';



const Microsoft= () => {

    const settings = {
        dots:false,
        infinite:true,
        autoplay:true,
        speed:300
    }

    return(
        <div
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`
            }}
        >
            
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_four})`,
                            height:`${window.innerHeight-10}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_five})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>

            </Slider>
            

        </div>
    )

}

export default Microsoft;