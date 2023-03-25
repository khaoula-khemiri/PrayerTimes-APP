import React, { useState, useEffect, useCallback } from 'react';
import './App.scss';
import AboutUs from './component/aboutUs/AboutUs';
import HadithPage from './component/hadithPage/HadithPage';
import Intro from './component/intro/Intro';
import PrayerPage from './component/prayerPage/PrayerPage';




function App() {

  return (
    <div className='app'>
      <Intro />
      <PrayerPage />
      <HadithPage />
      <AboutUs />
    </div>
  )
  // const [query, setQuery] = useLocalStorage('query', 'sousse');
  // const [date, setDate] = useState();
  // const [datehijri, setDatehijri] = useState();
  // const [fajr, setFajr] = useState();
  // const [sunrise, setSunrise] = useState();
  // const [dhur, setDhur] = useState();
  // const [asr, setAsr] = useState();
  // const [maghrib, setMaghrib] = useState();
  // const [isha, setIsha] = useState();
  // const [hadith, setHadith] = useState('عن أبي هريرة -رضي الله عنه- قال: قال رسول الله -صلى الله عليه وسلم-: «لا تجعلوا بيوتكم قبورا، ولا تجعلوا قبري عيدا، وصلوا عليّ فإن صلاتكم تبلغني حيث كنتم»');
  // const [lang, setLang] = useState('ar');
  // const [city, setcity] = useState();
  // const [dataHadtith, setdataHadtith] = useState();
  // const options = [
  //   { value: 'sousse', label: 'sousse' },
  //   { value: 'london', label: 'london' },
  //   { value: 'berlin', label: 'berlin' }
  // ]





  // useEffect(() => {
  //   const getDataHadith = async () => {
  //     try {
  //       const res = await axios.get(`https://hadeethenc.com/api/v1/hadeeths/list/?language=${lang}&category_id=5&page=1&per_page=120`);
  //       setdataHadtith(res);
  //     } catch (err) {
  //       console.log(err.response.data);
  //     }
  //   }
  //   search();
  //   getDataHadith();


  // }, []);


  // const search = evt => {
  //   fetch(`http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United Arab Emirates&method=8`)
  //     .then(res => res.json())
  //     .then(result => {

  //       const dataPrayer = result.data.timings;
  //       const date = result.data.date.gregorian.date;
  //       const dateHijri = result.data.date.hijri.date;
  //       setDate(date)
  //       setDatehijri(dateHijri)
  //       setFajr(dataPrayer.Fajr)
  //       setSunrise(dataPrayer.Sunrise)
  //       setDhur(dataPrayer.Dhuhr)
  //       setAsr(dataPrayer.Asr)
  //       setMaghrib(dataPrayer.Maghrib)
  //       setIsha(dataPrayer.Isha)


  //     })
  // }


  // const getHadith = async () => {
  //   try {
  //     const m = Math.floor(Math.random() * 100);
  //     const hadithId = dataHadtith.data.data[m].id;
  //     const resHadith = await axios.get(`https://hadeethenc.com/api/v1/hadeeths/one/?language=${lang}&id=${hadithId}`);
  //     console.log(resHadith.data.hadeeth);
  //     setHadith(resHadith.data.hadeeth)

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const searchLang = evt => {
  //   setLang(evt.target.value)
  // }




  // //result.results.datetime[0].times.Asr


  // return (
  //   <div className="app">

  //     <div className="title_container">
  //       <div className="image"><img src={mosque} height={100} width={100} /></div>
  //       <div className="title" >
  //         <div>Prayer time</div>
  //         <div >
  //           <h1 className="date">{date}</h1>
  //           <h1 className="date">{datehijri}</h1>
  //           <h1 className="date">{city}</h1>
  //         </div>
  //       </div>
  //     </div>

  //     <div className='search'>
  //       <input
  //         type="text"
  //         className="search-bar"
  //         placeholder="Name of the city"
  //         onChange={e => setQuery(e.target.value)}
  //       />
  //       <button className="button1" onClick={search}>Search</button>
  //       <Select options={options} />

  //     </div>

  //     <div className="prayer">
  //       <h1 className="salat">
  //         <div className="time1">Fajr   : </div>
  //         <div className="time1">{fajr}</div>
  //       </h1>
  //       <h1 className="salat">
  //         <div className="time1">Sunset : </div>
  //         <div className="time1">{sunrise}</div>
  //       </h1>
  //       <h1 className="salat">
  //         <div className="time1">Dhur   : </div>
  //         <div className="time1">{dhur}</div>
  //       </h1>
  //       <h1 className="salat">
  //         <div className="time1">Asr    : </div>
  //         <div className="time1">{asr}</div>
  //       </h1>
  //       <h1 className="salat">
  //         <div className="time1">Maghrib: </div>
  //         <div className="time1">{maghrib}</div>
  //       </h1>
  //       <h1 className="salat">
  //         <div className="time1">Isha   : </div>
  //         <div className="time1">{isha}</div>
  //       </h1>
  //     </div>

  //     <div className="hadith">
  //       <h1 className={(lang === "ar" ? "hadith-text_ar" : 'hadith-text')}>{hadith}</h1>
  //       <button className="button2" onClick={getHadith}>Change hadith</button>

  //       <select className='select' onChange={searchLang}>
  //         <option value="ar">عربي</option>
  //         <option value="en">English</option>
  //         <option value="fr">Français</option>
  //         <option value="tr">Türkçe</option>
  //       </select>

  //     </div>
  //   </div>
  // );
}

export default App;
 //npm install react-select-country-list --save

