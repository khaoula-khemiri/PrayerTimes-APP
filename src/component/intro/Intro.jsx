import React from 'react';
import Navbar from '../navbar/Navbar';
import Prayer from '../prayer/Prayer';
import "./intro.scss"
const Intro = () => {
    return (
        <div className='intro' id='intro'>
            <Navbar />
            <div className="introBotom">
                <div className="introContainer">
                    <div className="introParagraph">
                        A reliable Islamic Center to follow the Quran and Sunnah
                        <span>
                            The Salat is the time when the meeting with Allah take place
                        </span>
                    </div>
                    <a href='#prayer'>Prayer Time</a>
                </div>

            </div>
        </div>
    );
}

export default Intro;
