import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinnner from "./Spinnner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
captalizefirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loding: false,
      page: 1,
    };
    document.title = `${this.captalizefirstLetter(this.props.category)} - Daily Samachar`;
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=81374a441ca74df88dea941f86497f0d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    {
      this.setState({ loding: true });
    }
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(this.props.category);

    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loding: false,
    });
  }
  async componentDidMount() {
   
    this.updateNews();
  }

  handleNextclick = async () => {
    this.setState({
      page: this.state.page + 1
    });
    this.updateNews();
  };

  handlePrevclick = async () => {
    this.setState({
      page: this.state.page - 1
    });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          Daily Samachar - Top {this.captalizefirstLetter(this.props.category)} Headlines
        </h1>

        {this.state.loding && <Spinnner />}

        <div className="row">
          {!this.state.loding &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
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
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
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
