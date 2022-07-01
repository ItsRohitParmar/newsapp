import React, { Component } from 'react'

export default class NewsItem extends Component {
 

  render() {
    let {title, description, imgUrl, newsUrl, author, date,source} = this.props;
    console.log("making card");
    return (
      <div >
        <div className="card">
            <span className="badge rounded-pill bg-danger" style={{display:'flex', position: 'absolute',right: '0'}}>{source}</span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className="test-muted"> {!author?"":"By "+author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
