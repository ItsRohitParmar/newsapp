import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export default class News extends Component {

  static defaultProps = {
    country:'in',
    pageSize:6,
    category:'general'
  }

  static propTypes = {
    name: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }



  constructor() {

    super();
    console.log("Hello I am a Constructor from News component");
    this.state = {
      articles: [],
      loading: true,
      page: 1
    }
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8a9a3bea76540f796a17c8f880b7a5f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
       articles: parsedData.articles,
       totalResult: parsedData.totalResults,
       loading:false
    })
  }

  handlePreviuosClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8a9a3bea76540f796a17c8f880b7a5f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    })
  }

  handleNextClick = async () => {
    console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8a9a3bea76540f796a17c8f880b7a5f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      })
    }


  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin:'39px 0px'}}>Today's Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}
               author={element.author} date={element.publishedAt} source={element.source.name} bgcol={'warning'} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviuosClick}>Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
}
