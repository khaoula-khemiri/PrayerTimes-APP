import React from 'react'
import Prayer from '../prayer/Prayer'
import "./prayerPage.scss"

const PrayerPage = () => {
    return (
        <div className="prayerPage">
            <div className='leftContainer'>
                <p><span>The Messenger of Allah (pbuh) said: “</span> The place of prayer (salah) in religion is like the place of the head in the body.<span>”</span> </p>
                <div className='imageContainer'>
                    <img src="./img/salat.jpg" alt="" />
                </div>
            </div>
            <Prayer />
        </div>
    )
}

export default PrayerPage
