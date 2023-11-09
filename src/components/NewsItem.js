import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imgurl, newsurl} = this.props;
    return (
      <div className="my-3">
         <div className="card">
          <img src={!imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnHpTEi61x2qXfpDUwmICoXWr5OFJ2dH29A":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}... 
            </p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default NewsItem