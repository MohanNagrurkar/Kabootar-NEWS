import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


  constructor(){
    super();
    this.state={
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17614a99eca24dafab34ee39edf7562c&pageSize=9";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults})

  }

  handlePrevClick = async () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17614a99eca24dafab34ee39edf7562c';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      page: this.state.page - 1,
      articles : parsedData.articles
    })
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > (Math.ceil(this.state.totalResults/20))) {

    }
    else{
    let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17614a99eca24dafab34ee39edf7562c';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      page: this.state.page + 1,
      articles : parsedData.articles
    })
  }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2> Kabootar - Top Headlines </h2>

            <div className="row">
            {this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url} >                   
                      <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                  </div>
            })} 
            </div>
            <div className="container d-flex justify-content-between">
            {/* <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick= {this.handlePrevClick}> &larr; Previous</button> */}

              <button disabled={this.state.page<=15} type="button" className="btn btn-dark" onClick= {this.handleNextClick}> More </button>
            </div>
        </div>
    )
  }
}

export default News
