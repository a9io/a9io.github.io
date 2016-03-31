/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Footer.scss';

class Footer extends Component {

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <footer className="Footer">
        <h1>a9</h1>
        <p>2016</p>
      </footer>
    );
  }

}

export default Footer;
