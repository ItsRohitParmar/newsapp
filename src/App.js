import './App.css';
import React, {useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

import Navbar from './component/Navbar';
import News from './component/News';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {

  const pageSize = 6;

  const apiKey = process.env.REACT_APP_NEWS_API;

  
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
            <Route exact path='/' element={ <News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country={"in"} category={'general'} col={'warning'}/>}/>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country={"in"} category={'business'}  col={'warning'}/>}/>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country={"in"} category={'entertainment'}  col={'warning'}/>}/>
            <Route exact path='/general' element={ <News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country={"in"} category={'general'}  col={'warning'}/>}/>
            <Route exact path='/health' element={ <News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country={"in"} category={'health'}  col={'warning'}/>}/>
            <Route exact path='/science' element={ <News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country={"in"} category={'science'}  col={'warning'}/>}/>
            <Route exact path='/sports' element={ <News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country={"in"} category={'sports'}  col={'warning'}/>}/>
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country={"in"} category={'technology'}  col={'warning'}/>}/>
          </Routes>
        </Router>
      </div>
    )
}
export default App