import { movies } from "./getMovies";

import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    let movie = movies.results[0]
    // let movie=''
    return (
        <>
        { movie ==''? // if no  movies is return div with loader // ? ternary operator used as if else
        <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>: 
         //else print this
        <div className="card banner-card" > 
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt={movie.title}/>
        {/* <div className="card-body"> */}
          <h1 className="card-title banner-title">{movie.original_title}</h1>
          <p class="card-text banner-text">{movie.overview}</p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        {/* </div> */}
      </div>
  }
      </>
    )
  }
}
