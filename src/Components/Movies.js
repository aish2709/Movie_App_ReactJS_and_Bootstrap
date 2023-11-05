import React, { Component } from 'react'
import { movies } from "./getMovies";

export default class Movies extends Component {
  constructor(){
    super();
    this.state={
      hover:'',
      parr:[1]
    }
  }
  
  render() {
    
    let movie=movies.results
    return (
      <>
        {
          movie.length==0?
          <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>:
          <div>
            <h3 className='text-center'><strong>Trending</strong></h3>
            <div className='movies-list'>
              {
                  movie.map((movieObj)=>(
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
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              {
                this.state.parr.map((value)=>(
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                ))
              }
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
          </div>
          </div>
         
        }
      </>
    )
  }
}
