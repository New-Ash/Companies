import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_six from '../resources/images/slide_six.jpg';
import slide_seven from '../resources/images/slide_seven.jpg';
import slide_8 from '../resources/images/slide_eight.jpg';



const Facebook= () => {

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
                            background:`url(${slide_six})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_seven})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_8})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>

            </Slider>
            

        </div>
    )

}

export default Facebook;