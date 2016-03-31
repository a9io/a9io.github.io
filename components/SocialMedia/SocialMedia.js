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
				<a href="https://twitter.com/a9_io"><i className="fa fa-twitter"></i></a>
				<a href="https://www.linkedin.com/in/max-k-10a62a106"><i className="fa fa-linkedin"></i></a>
				<a href="https://medium.com/@a9"><i className="fa fa-medium"></i></a>
				<a href="https://www.last.fm/user/a9_io"><i className="fa fa-lastfm"></i></a>
				<a href="https://github.com/maxkrieger"><i className="fa fa-github"></i></a>
				<a href="https://www.google.com/recaptcha/mailhide/d?k=01OQgZinQEdZ8NZXVTw0niRQ==&amp;c=aAHOFQgEVekfGiM4ENP0F1tGDqNTi4RZzNjnYcjE33U="><i className="fa fa-envelope"></i></a>
      </div>
    );
  }

}

export default SocialMedia;
