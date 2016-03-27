/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './ProjectBox.scss';

class ProjectBox extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    name: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    return (
      <a href="#">
				<div className="ProjectBox" style={{backgroundImage: `url(${this.props.image})`, backgroundSize: 'cover'}}>
					<div className="Overlay row center-xs middle-xs">
						<div className="Title">{this.props.title}</div>
					</div>
      	</div>
			</a>
    );
  }

}

export default ProjectBox;
