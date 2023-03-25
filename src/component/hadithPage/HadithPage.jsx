import React from 'react'
import Hadith from '../hadith/Hadith'
import "./hadithPage.scss"

const HadithPage = () => {
    return (
        <div className="hadithPage">
            <div className="leftContainer">
                <Hadith />
            </div>

            <div className='rightContainer'>
                <p><span>The Messenger of Allah (pbuh) said : “</span> Convey from me, even if it is one verse.<span>”</span> </p>
                <div className='imageContainer'>
                    <img src="./img/salatd.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HadithPage
