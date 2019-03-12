/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Modal.scss';
import Footer from '../Footer';

class Modal extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    back: PropTypes.element.func,
    title: PropTypes.string,
    show: PropTypes.bool,
  };
  render() {
    return (
			<div className={'Modal' + ' ' + (this.props.show ? 'Show' : 'Hide')}>
        <div className="row between-xs">
          <div className="">
          <div className="backBtn" onClick={this.props.back}>
            <i className="fas fa-chevron-circle-left"></i>
          </div>
          </div>
          <div className="">
            <div className="MoxBoxSmall" onClick={this.props.back}>
              Max Krieger
            </div>
          </div>
          <div><div></div></div>
        </div>
        <div className="row center-xs start-sm">
          <h1>{this.props.title}</h1>
        </div>
        <div className="row content">{this.props.children}</div>
        <Footer />
			</div>
    );
  }

}

export default Modal;
