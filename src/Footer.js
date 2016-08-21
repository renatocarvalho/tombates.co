import React, { Component } from 'react';

export default class Footer extends Component {
  render () {
    return (
      <footer id="footer" className="section">
        <h2 className="measure">Get in touch</h2>
        <dl>
          <dt>Email</dt>
          <dd><a href="mailto:hey@tombates.co">hey@tombates.co</a></dd>

          <dt>Twitter</dt>
          <dd><a href="#">https://twitter.com/yoamomonstruos</a></dd>

          <dt>Dribbble</dt>
          <dd><a href="#">https://dribbble.com/yoamomonstruos</a></dd>

          <dt>Github</dt>
          <dd><a href="#">https://github.com/yoamomonstruos</a></dd>
        </dl>
      </footer>
    )
  }
}
