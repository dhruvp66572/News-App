import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinnner from "./Spinnner";
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize : 6,
    category : "general"
  }

  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loding: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=81374a441ca74df88dea941f86497f0d&page=1&pageSize=${this.props.pageSize}`;
      {this.setState({loding:true})}
      let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loding :false
    });
    // console.log(parsedata)
  }

  handleNextclick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=81374a441ca74df88dea941f86497f0d&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      {this.setState({loding:true})}
      let data = await fetch(url);
      let parsedata = await data.json();
      
      this.setState({
        articles: parsedata.articles,
        page: this.state.page + 1,
        loding :false
      });
      // document.getElementById("next").disabled = false
    }
  };

  handlePrevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=81374a441ca74df88dea941f86497f0d&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    {this.setState({loding:true})}
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      articles: parsedata.articles,
      page: this.state.page - 1,
      loding :false
    });
  };

  render() {
    return (
      <div className="container my-3">
          <h1 className="text-center" style={{margin: '35px 0px'}}>Daily Samachar - Top Headlines</h1>
      
        {this.state.loding && <Spinnner/>}
        
        <div className="row">
          {!this.state.loding && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            id="next"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
