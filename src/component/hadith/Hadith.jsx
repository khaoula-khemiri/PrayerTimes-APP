import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import "./hadith.scss"
const Hadith = () => {
    const [hadith, setHadith] = useState('عن أبي هريرة رضي الله عنه عن النبي صلى الله عليه وسلم قال: «مَنْ قَالَ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ في يومٍ مِائَةَ مَرَّةٍ حُطَّتْ عَنْهُ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ».');
    const [lang, setLang] = useState('ar');
    const [dataHadtith, setdataHadtith] = useState();
    const [dataHadtithId, setdataHadtithId] = useState(5516);

    useEffect(() => {
        const getDataHadith = async () => {
            try {
                const res = await axios.get(`https://hadeethenc.com/api/v1/hadeeths/list/?language=${lang}&category_id=5&page=1&per_page=120`);
                setdataHadtith(res);
            } catch (err) {
                console.log(err.response.data);
            }
        }
        getDataHadith();


    }, []);


    const getHadithById = async (hadithId, langauge) => {
        try {
            const resHadith = await axios.get(`https://hadeethenc.com/api/v1/hadeeths/one/?language=${langauge}&id=${hadithId}`);
            setHadith(resHadith.data.hadeeth)
        } catch (err) {
            console.log(err);
        }
    };

    const getHadith = async () => {
        const m = Math.floor(Math.random() * 100);
        console.log(dataHadtith);
        const hadithId = dataHadtith.data.data[m].id;
        setdataHadtithId(hadithId)
        console.log(hadithId);
        getHadithById(hadithId, lang)

    };

    const searchLang = evt => {
        setLang(evt.target.value);
        getHadithById(dataHadtithId, evt.target.value)
        console.log(lang);
    }


    return (
        <div className='hadith' id='hadith'>
            <div className="hadithContainer">
                <h1 className={(lang === "ar" ? "hadith-text_ar" : 'hadith-text_lang')}>{hadith}</h1>
            </div>

            <div className="bottomContainer">
                <div className='imageContainer' onClick={getHadith}>
                    <img src="./img/loop-arrow.png" alt="" />
                </div>

                <select className='select' onChange={searchLang}>
                    <option value="ar">عربي</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="tr">Türkçe</option>
                </select>
            </div>

        </div>
    );
}

export default Hadith;
