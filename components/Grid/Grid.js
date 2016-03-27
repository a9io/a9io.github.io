/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Grid.scss';

class Grid extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
  };

  render() {
    return (
      <div className="Grid">
				<h1>{this.props.title}</h1>
      	<div className="gridContainer row around-xs">
					{this.props.children}
				</div>
      </div>
    );
  }

}

export default Grid;
