import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import useLocalStorage from './useLocalStorage';
import mosque from './image/img3.png';




function App() {
  
  const [query, setQuery] = useLocalStorage('query', 'sousse');
  const [date, setDate] = useState();
  const [datehijri, setDatehijri] = useState();
  const [fajr, setFajr] = useState();
  const [sunrise, setSunrise] = useState();
  const [dhur, setDhur] = useState();
  const [asr, setAsr] = useState();
  const [maghrib, setMaghrib] = useState();
  const [isha, setIsha] = useState();
  const [hadith, setHadith] = useState('عن أبي هريرة -رضي الله عنه- قال: قال رسول الله -صلى الله عليه وسلم-: «لا تجعلوا بيوتكم قبورا، ولا تجعلوا قبري عيدا، وصلوا عليّ فإن صلاتكم تبلغني حيث كنتم»');
  const [lang,setLang]= useState('ar');





  useEffect(() => { 
    search();
  }, []);

  

  const search = evt => {
      fetch(`https://api.pray.zone/v2/times/today.json?city=${query}&school=2`)
      .then(res => res.json())
      .then(result => {console.log(result.results)
        const y=result.results.datetime[0];
        setDate(y.date.gregorian)
        setDatehijri(y.date.hijri)
        setFajr(y.times.Fajr)
        setSunrise(y.times.Sunrise)
        setDhur(y.times.Dhuhr)
        setAsr(y.times.Asr)
        setMaghrib(y.times.Maghrib)
        setIsha(y.times.Isha)
        
      })}

      const change = evt => {
       
        fetch(`https://hadeethenc.com/api/v1/hadeeths/list/?language=${lang}&category_id=5&page=1&per_page=120`)
        .then(res => res.json())
        .then(result => {
          const m=Math.floor(Math.random() * 100);
          const y=result.data[m].id;
          fetch(`https://hadeethenc.com/api/v1/hadeeths/one/?language=${lang}&id=${y}`)
          .then(rest => rest.json())
          .then(rt => {setHadith(rt.hadeeth)})
          
        
        })}

        const searchLang = evt =>{
          setLang(evt.target.value)
        }
      


      
      //result.results.datetime[0].times.Asr
  

  return (
    <div className="app">

     <div className="title_container">
       <div><img src={mosque} height={100} width={100} /></div>
       <div className="title" >
         <div>Prayer time</div>
         <div >
           <h1 className="date">{date}</h1>
           <h1 className="date">{datehijri}</h1>
           <h1 className="date">{query}</h1>
         </div>
       </div>
     </div>

     <div className='search'>
       <input 
            type="text"
            className="search-bar"
            placeholder="Name of the city"
            onChange={e => setQuery(e.target.value)}
          />
       <button className="button1" onClick={search}>Search</button>
       
     </div>

     <div className="prayer">
       <h1 className="salat">
         <div>Fajr   : </div>
         <div className="time1">{fajr}</div>
       </h1>
       <h1 className="salat"> 
         <div>Sunset : </div>
         <div className="time2">{sunrise}</div>
       </h1>
       <h1 className="salat">
         <div>Dhur   : </div>
         <div className="time3">{dhur}</div>
       </h1>
       <h1 className="salat">
         <div>Asr    : </div>
         <div className="time1">{asr}</div>
       </h1>
       <h1 className="salat">
         <div>Maghrib: </div>
         <div className="time4">{maghrib}</div>
       </h1>
       <h1 className="salat">
         <div>Isha   : </div>
         <div className="time3">{isha}</div>
       </h1>
     </div>
          
      <div className="hadith">
       <h1 className={(lang === "ar" ? "hadith-text_ar" : 'hadith-text')}>{hadith}</h1>
       <button className="button2"onClick={change}>Change hadith</button>
       
       <select  className= 'select' onChange={searchLang}>
         <option value="ar">عربي</option>
         <option value="en">English</option>
         <option value="fr">Français</option>
         <option value="tr">Türkçe</option>
       </select>
       
     </div>
   </div>
  );
}

export default App;
 //npm install react-select-country-list --save

 