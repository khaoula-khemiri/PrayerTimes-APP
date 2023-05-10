import React, { useState, useEffect, useCallback } from 'react';
import Select from 'react-select'


import "./prayer.scss"
const Prayer = () => {
    const [date, setDate] = useState();
    const [datehijri, setDatehijri] = useState();
    const [fajr, setFajr] = useState();
    const [sunrise, setSunrise] = useState();
    const [dhur, setDhur] = useState();
    const [asr, setAsr] = useState();
    const [maghrib, setMaghrib] = useState();
    const [isha, setIsha] = useState();
    const [city, setcity] = useState("Tunisia");
    const [contry, setcontry] = useState();

    const search = evt => {
        fetch(`https://api.aladhan.com/v1/timingsByAddress?address=${city}`)
            .then(res => res.json())
            .then(result => {

                const dataPrayer = result.data.timings;
                const date = result.data.date.readable;
                const dateHijri = result.data.date.hijri;
                setDate(date)
                setDatehijri(` ${dateHijri.day} ${dateHijri.month.en} ${dateHijri.year} `)
                setFajr(dataPrayer.Fajr)
                setSunrise(dataPrayer.Sunrise)
                setDhur(dataPrayer.Dhuhr)
                setAsr(dataPrayer.Asr)
                setMaghrib(dataPrayer.Maghrib)
                setIsha(dataPrayer.Isha)


            })

        fetch(`https://countriesnow.space/api/v0.1/countries`)
            .then(res => res.json())
            .then(result => {
                const newArray = result.data.map(item => ({ value: item.country, label: item.country }));
                setcontry(newArray)
            })
    }
    useEffect(() => {
        search();
    }, [city]);


    return (
        <div className='prayer' id='prayer'>


            <div className="bottom">
                <div className="bottomLeft">
                    <div className="search">
                        {/* <input type="text" placeholder='City' list="country" /> */}
                        {/* <SearchBar placeholder="Enter a Book Name..." data={contry} /> */}
                        <Select className='select' options={contry} onChange={(choice) => setcity(choice.value)} />
                        <div className="date">
                            {date}
                            <span>({datehijri})</span>
                        </div>
                    </div>

                    {/* <div className="SunRiseContainer">
                        <div className="sunrise">
                            <div className="sunriseTitle">
                                <div className="circel">
                                    <div className="center"></div>
                                </div>
                                Sun Rise
                            </div>
                            <div className="sunriseTime">
                                5:38 Am
                            </div>
                        </div>
                    </div> */}
                    <div className="prayerContainer">
                        <div className="prayerTitle">
                            <ul >
                                <li>Salah</li>
                                <li>Adhan Time</li>
                            </ul>
                        </div>
                        <div className="Item">
                            <ul>
                                <li>
                                    <img src="./img/clock.jpg" alt="" />
                                    Fajr</li>
                                <li>{fajr} </li>
                            </ul>
                        </div>
                        <div className="Item">
                            <ul>
                                <li> <img src="./img/clock.jpg" alt="" />Dhur</li>
                                <li>{dhur} </li>
                            </ul>
                        </div>

                        <div className="Item ">
                            <ul>
                                <li> <img src="./img/clock.jpg" alt="" />Asr</li>
                                <li>{asr} </li>
                            </ul>
                        </div>

                        <div className="Item">
                            <ul>
                                <li><img src="./img/clock.jpg" alt="" /> Mghrib </li>
                                <li>{maghrib}</li>

                            </ul>
                        </div>

                        <div className="Item">
                            <ul>
                                <li> <img src="./img/clock.jpg" alt="" />Isha  </li>
                                <li>{isha} </li>
                            </ul>
                        </div>


                    </div>
                </div>

                {/* <div className="bottomRight">
                    <div className="top">
                        <div className="topLeft">
                            Masjid's Daily Prayer Time
                        </div>
                        <div className="topRight">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis ad voluptatem sed expedita ipsam odio eaque dolorum
                            , fugiat laudantium eligendi debitis ducimus?
                            Vitae commodi veniam facilis optio? Dolore, sapiente magni!
                        </div>
                    </div>
                    <div className="SunRiseContainer">
                        <div className="sunrise">
                            <div className="sunriseTitle">
                                <div className="circel">
                                    <div className="center"></div>
                                </div>
                                Sun Rise
                            </div>
                            <div className="sunriseTime">
                                5:38 Am
                            </div>
                        </div>
                    </div>


                    <div className="imgContainer">
                        <img src="./img/mosqueTurkey.jpg" alt="" />
                    </div>
                </div> */}
            </div>

        </div>
    );
}

export default Prayer;
