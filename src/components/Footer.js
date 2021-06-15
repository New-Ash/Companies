  
import React from 'react';
import { Bounce } from 'react-awesome-reveal';

const Footer = () => {
    return(
        <footer className="bck_red">
            < Bounce  triggerOnce delay={500}>
                <div className="font_righteous footer_logo_venue">Top 3 Companies</div>

            </  Bounce >
        </footer>
    )
}

export default Footer;