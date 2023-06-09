import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageURL,newsURL}= this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageURL?imageURL:"https://www.dsij.in/Portals/0/EasyDNNnews/30720/image_238.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsURL} target="_blank" className="btn btn-dark" rel="noreferrer" >Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
   