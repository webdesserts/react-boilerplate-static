import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div className='content'>
        <header>
          {/*
          <IndexLink to='/' activeClassName='active'>Home</IndexLink>
          <Link to='/about' activeClassName='active'>About</Link>
          */}
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
