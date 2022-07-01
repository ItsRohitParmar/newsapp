import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
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



  constructor(props) {

    super(props);
    console.log("Hello I am a Constructor from News component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title = `${this.capitalize(this.props.category)} - Quick News`;
  }


  async updateNews()
  {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
       articles: parsedData.articles,
       totalResults: parsedData.totalResults,
       loading:false
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    console.log("cdm");
   this.updateNews();
  }

  // handlePreviuosClick = async () => {
  //   console.log("prev");
  //   await this.setState({page: this.state.page - 1});
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   console.log("Next");
  //   await this.setState({page: this.state.page + 1});
  //   this.updateNews();
  //   }


    capitalize = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }


    fetchMoreData = async () => {

    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    console.log("Total Result = "+this.state.totalResults);

    this.setState({
       articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults,
       loading:false
    })
    };


  render() {
    console.log("render");
    return (
    <>
        <h2 className='text-center' style={{margin:'39px 0px'}}>Today's Top {this.capitalize(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container my-3'>
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}
               author={element.author} date={element.publishedAt} source={element.source.name} bgcol={'warning'} />
            </div>
          })}
        </div>
      </div>
        </InfiniteScroll>
      </>
    )
  }
}




//   handlePreviuosClick = async () => {
//     console.log("prev");
//     this.setState({page: this.state.page - 1})
//     this.updateNews();
//   }

//   handleNextClick = async () => {
//     console.log("Next");
//     this.setState({page: this.state.page + 1})
//     this.updateNews();

//   }
  
