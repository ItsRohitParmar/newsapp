import './App.css';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

import Navbar from './component/Navbar';
import News from './component/News';
import About from "./component/About/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { default as data } from "./Data/data.json";
const App = () => {

  const pageSize = 6;

  // const apiKey = process.env.REACT_APP_NEWS_API;


  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height='3px'
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} category={'general'} newsData={data.general} col={'warning'} />} />
          <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} category={'business'} newsData={data.business} col={'warning'} />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} category={'entertainment'} newsData={data.entertainment} col={'warning'} />} />
          <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={pageSize} category={'general'} newsData={data.general} col={'warning'} />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} category={'health'} newsData={data.health} col={'warning'} />} />
          <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} category={'science'} newsData={data.science} col={'warning'} />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} category={'sports'} newsData={data.sports} col={'warning'} />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} category={'technology'} newsData={data.technology} col={'warning'} />} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App