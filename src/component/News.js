import React, {useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const News = (props)=>{

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
   // eslint-disable-next-line
  const [totalResults, setTotalResults] = useState(0);
  
     const capitalize = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.title = `${capitalize(props.category)} - Quick News`;

    const {newsData} = props;

  const updateNews = async ()=>{
  
    props.setProgress(10);
    setLoading(true);
    props.setProgress(30);
    let parsedData = newsData;
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])
  
    console.log("rendering");
    return (
    <>
        <h2 className='text-center' style={{margin:'40px 0px 50px 0px'}}>Today's Top {capitalize(props.category)} Headlines</h2>
        {loading && <Spinner/>}
        <div className='container my-3'>
        <div className='row'>
          {articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}
               author={element.author} date={element.publishedAt} source={element.source.name} bgcol={'warning'} />
            </div>
          })}
        </div>
      </div>
      </>
    )
}

News.defaultProps = {
  country:'in',
  pageSize:6,
  category:'general'
}

News.propTypes = {
  name: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News

