import React, { Component } from 'react';
import Container from './components/Container';
import Definition from './components/Definition';
import Section from './components/Section';
import Changelog from './containers/Changelog';

const headerMD = "# - Tom Bates [(@yoamomonstruos)](https://twitter.com/yoamomonstruos)\n\nA designer living in **Brasília, DF**. One half of [mais ou menos](http://maisoumenos.co). Previous, I've made things at places like [Palantir](https://palantir.com), [Ustwo](https://ustwo.com) and [GoCardless](https://gocardless.com). Why not [say hello](#footer)?\n\n*[!] Current accepting new projects for late 2016.*";

const footerList = [{
  term: "Dribbble",
  description: "[dribbble.com/yoamomonstrous](https://dribbble.com/yoamomonstrous)"
},{
  term: "Email",
  description: "[hey@tombates.co](mailto:hey@tombates.co)"
},{
  term: "Github",
  description: "[github.com/yoamomonstrous](https://github.com/yoamomonstrous)"
},{
  term: "Twitter",
  description: "[twitter.com/yoamomonstrous](https://twitter.com/yoamomonstrous)"
}];

class App extends Component {
  render() {
    return (
      <Container>
        <Section
          className="measure section"
          tagName='header'
          markdown={headerMD}
        />

        <Changelog />

        <Definition
          id="footer"
          className="measure section"
          list={footerList} />
      </Container>
    );
  }
}
export default App;
