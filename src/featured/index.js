import React from 'react';
import Google from './Google';
import Microsoft from './Microsoft';
import Facebook from './Facebook';
import { Slide } from 'react-awesome-reveal';
import '../mystyles.css';

const Featured=()=> {
    return (
        <div className="featured_container">
            
            
            <Google/>

            <div>
            <Slide direction="left" triggerOnce delay={500}>
                <div className="hello">
                Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14% of its shares and control 56% of the stockholder voting power through super-voting stock. The company went public via an initial public offering (IPO) in 2004. In 2015, Google reorganized as a subsidiary of a conglomerate called Alphabet Inc. Google is Alphabet's largest subsidiary and is a holding company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page, who became the CEO of Alphabet. In 2021, the Alphabet Workers Union was founded, mainly composed of Google employees.
                </div>
            </Slide>
            <Microsoft/>
            <Slide direction="right" triggerOnce delay={500}>
                <div className="hello">
                Microsoft Corporation is an American multinational technology company which produces computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue;[3] it was the world's largest software maker by revenue as of 2016.[4] It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.As of 2015, Microsoft is market-dominant in the IBM PC compatible operating system market and the office software suite market, although it has lost the majority of the overall operating system market to Android.
                </div>
            </Slide>
            <Facebook/>
            <Slide direction="left" triggerOnce delay={500}>
                <div className="hello">
                Founded in 2004 by Mark Zuckerberg with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, its name comes from the face book directories often given to American university students. Membership was initially limited to Harvard students, gradually expanding to other North American universities and, since 2006, anyone over 13 years old. As of 2020, Facebook claimed 2.8 billion monthly active users,[2] and ranked seventh in global internet usage.[7] It was the most downloaded mobile app of the 2010s.acebook can be accessed from devices with Internet connectivity, such as personal computers, tablets and smartphones.
                </div>
            </Slide>



            </div>

            
        </div>
    )
}

export default Featured;
