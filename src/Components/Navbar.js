import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',background:'lightblue',padding:'0.5'}}>
       <Link to='/' style={{textDecoration:'none'}}> <h1 style={{marginLeft:'1rem',marginTop:'1rem'}}>Movies App</h1></Link>
        <Link to='/favourites' style={{textDecoration:'none'}}><h2 style={{marginLeft:'2rem',marginTop:'1.5rem'}}>Favourites</h2></Link>
      </div>
    )
  }
}
