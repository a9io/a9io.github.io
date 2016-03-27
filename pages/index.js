/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Header from '../components/Header';
import BigText from '../components/BigText';
import SocialMedia from '../components/Socialmedia';
import Grid from '../components/Grid';
import ProjectBox from '../components/ProjectBox';

export default class extends Component {

  render() {
    return (
      <div>
				<Header />
				<BigText>
					A designer & developer from Boston, currently in high school.
				</BigText>
				<SocialMedia />
				<Grid title="Projects">
					<ProjectBox title="alienbox" image="alienbox.png"/>
					<ProjectBox title="Tabmaster" image="tabmaster.png"/>
				</Grid>
      </div>
    );
  }

}
