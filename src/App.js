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



}

export default App;
 //npm install react-select-country-list --save

