/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Header.scss';
import MoxBox from '../MoxBox';

class Header extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
			<header className="row center-xs">
				<MoxBox />
			</header>
    );
  }

}
export default Header;
