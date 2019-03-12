/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './SocialMedia.scss';

class SocialMedia extends Component {

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div className="SocialMedia row center-xs end-sm">
				<a href="https://twitter.com/maxkriegers"><i className="fab fa-twitter"></i></a>
        <a href="https://www.goodreads.com/user/show/61849534-max"><i className="fab fa-goodreads"></i></a>
				<a href="https://www.linkedin.com/in/max-krieger"><i className="fab fa-linkedin"></i></a>
				{/*<a href="https://www.last.fm/user/a9_io"><i className="fab fa-lastfm"></i></a>*/}
				<a href="https://github.com/maxkrieger"><i className="fab fa-github"></i></a>
				<a href="mailto:maxkrieger+319@cmu.edu"><i className="fas fa-envelope"></i></a>
      </div>
    );
  }

}

export default SocialMedia;
