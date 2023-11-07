import React, { Component } from 'react'
// import { movies } from "./getMovies";
import axios from 'axios';
export default class Movies extends Component {
  constructor(){
    super();
    this.state={
      hover:'',
      parr:[1],
      currPage:1,
      movies:[]
    }
  }
  async componentDidMount(){
    //sideeffects
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2cb8c93339cc08d354e2ef3a61ceb69c&language=en-US&page=${this.state.currPage}`) 
    let data = res.data
    // console.log(data)
    this.setState({
      movies:[...data.results]
    })
    // console.log('Mounting done')
   
  }
  changeMovies=async()=>{
    console.log('changeMovies called');
    console.log(this.state.currPage);
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2cb8c93339cc08d354e2ef3a61ceb69c&language=en-US&page=${this.state.currPage}`) 
    let data = res.data
    // console.log(data)
    this.setState({
      movies:[...data.results]
    })
  }
  handleRight=()=>{
    let temparr=[]
    for(let i=1;i<=this.state.parr.length+1;i++){
     temparr.push(i); 
    }
    this.setState({
      parr:[...temparr],
      currPage:this.state.currPage+1
    },this.changeMovies)
    
  }
  handleLeft=()=>
  {

  if(this.state.currPage!=1)
  {
    this.setState({
      currPage:this.state.currPage-1
   },this.changeMovies)

   }
  }
handleClick=(value)=>{
  console.log(value)
  console.log(this.state.currPage)
if(value!=this.state.currPage){
  this.setState({
    currPage:value
  },this.changeMovies)
}

}
  render() {
    // console.log('render')
    // let movie=movies.results
    return (
      <>
        {
          this.state.movies.length==0?
          <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>:
          <div>
            <h3 className='text-center'><strong>Trending</strong></h3>
            <div className='movies-list'>
              {
                  this.state.movies.map((movieObj)=>(
                    <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}> 
        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movies-img"  alt={movieObj.title}/>
        {/* <div className="card-body"> */}
          <h5 className="card-title movies-title">{movieObj.original_title}</h5>
          {/* <p class="card-text movies-text">{movieObj.overview}</p> */}
         <div className='button-wrapper' style={{display:'flex', justifyContent:'center', width:'100%'}}>
          {
            this.state.hover == movieObj.id &&
            <a className="btn btn-primary movies-button">Add to Favourites</a>
          }
          
          </div>
        {/* </div> */}
          </div>
                  ))
              }
            </div>
            <div style={{justifyContent:'center', display:'flex'}}>
            <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" onClick={this.handleLeft}>Previous</a></li>
              {
                this.state.parr.map((value)=>(
                  <li class="page-item"><a class="page-link" onClick={()=>this.handleClick(value)}>{value}</a></li>
                ))
              }
              <li class="page-item"><a class="page-link" onClick={this.handleRight}>Next</a></li>
            </ul>
          </nav>
          </div>
          </div>
         
        }
      </>
    )
  }
}
