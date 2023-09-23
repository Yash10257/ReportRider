import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl,author, date, source}= this.props;
    return (
      <div className='my-3'>
         <div className="card" >
         <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"92%"}}>{source}</span>
            <img src={imageUrl?imageUrl:"https://minerescue.org/wp-content/uploads/2020/03/Marketplace-Lending-News.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
