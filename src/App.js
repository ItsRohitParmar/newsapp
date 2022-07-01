import './App.css';
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';

import Navbar from './component/Navbar';
import News from './component/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {

  pageSize = 6;

  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height='3px'
      />
          <Navbar />
          <Routes>
            <Route exact path='/' element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country={"in"} category={'general'} col={'warning'}/>}/>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country={"in"} category={'business'}  col={'warning'}/>}/>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country={"in"} category={'entertainment'}  col={'warning'}/>}/>
            <Route exact path='/general' element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country={"in"} category={'general'}  col={'warning'}/>}/>
            <Route exact path='/health' element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country={"in"} category={'health'}  col={'warning'}/>}/>
            <Route exact path='/science' element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country={"in"} category={'science'}  col={'warning'}/>}/>
            <Route exact path='/sports' element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country={"in"} category={'sports'}  col={'warning'}/>}/>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country={"in"} category={'technology'}  col={'warning'}/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
