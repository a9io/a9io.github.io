/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Section.scss';

class Section extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
  };

  render() {
    return (
      <div className="Section">
				<h1>{this.props.title}</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Section;
