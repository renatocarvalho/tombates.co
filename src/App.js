import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Changelog from './Changelog';

class App extends Component {
  render() {
    return (
      <article>
        <Header />
        <Changelog />
        <Footer />
      </article>
    );
  }
}

export default App;
