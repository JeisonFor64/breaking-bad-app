import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainimage from '../../image/main-image.png'

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <Link to='/'><img src={mainimage} alt='main-img'/></Link>
        <Link to='/character/create'><h1>Create Character</h1></Link>
      </div>
    )
  }
}

export default Nav;
