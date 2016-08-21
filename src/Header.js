import React, { Component } from 'react';

export default class Header extends Component {
  render () {
    return (
      <header id="header" className="section">
        <h1 className="measure">Tom Bates ~ <a href="#">@yoamomonstruos</a></h1>
        <p className="measure">A designer living in <a href="#">Brasília, DF</a>. One half of <a href="#">mais ou menos</a>. Previously, making things at <a href='#'>Palantir</a>, <a href='#'>Ustwo</a>, <a href='#'>GoCardless</a> and couple of other places. Currently accepting new projects for late 2016, <a href="#footer">get in touch</a>.</p>
      </header>
    )
  }
}
