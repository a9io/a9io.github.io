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
import Modal from '../components/Modal';
import Section from '../components/Section';
import Footer from '../components/Footer';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
    };
  }
  showProject(project) {
    this.setState({show: project});
  }
  hideProject() {
    this.setState({show: ''});
  }
  render() {
    return (
      <div className="page">
        <div className="showing">
				<Header />
				<BigText>
					A designer & developer from Boston, currently in high school.
				</BigText>
				<SocialMedia />
				<Grid title="Projects">
					<ProjectBox clicked={(item) => this.showProject(item)} title="alienbox" image="alienbox.png"/>
					<ProjectBox clicked={(item) => this.showProject(item)} title="Tabmaster" image="tabmaster.png"/>
				</Grid>
        <Section title="About">
          <div className="row">
          <div className="col-sm-6 col-xs-12">
          <p>I'm a designer & developer in high school from the Boston area who has a passion in human-computer interaction and automation. I develop small tools and larger projects in my free time.</p>
          </div>
          <div className="col-sm-6 col-xs-12">
            <p>I also participate in my school's robotics team and run the Linguistics club there.</p>
            <p>Right now I intern for <a href="http://www.cabinetcrm.com/">CabinetCloud</a> where I design interfaces and develop our mobile app.</p>
          </div>
          </div>
        </Section>
        <Footer />
        </div>
				<Modal show={(this.state.show === 'alienbox')} back={() => this.hideProject()} title="alienbox">
          <div className="col-sm-6 col-xs-12">
            <p>alienbox is a menubar app for checking your reddit inbox.</p>
            <p>it was built from the ground up with Electron, VueJS, and the Reddit API.</p>
            <div className="row center-xs">
              <a href="/alienbox">
                <div className="visitButton" style={{backgroundColor: '#FF6600'}}>
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="300" src="alienbox.png" />
              </div>
            </div>
          </div>
				</Modal>
        <Modal show={(this.state.show === 'Tabmaster')} back={() => this.hideProject()} title="Tabmaster">
          <div className="col-sm-6 col-xs-12">
            <p>Tabmaster is a chrome extension allowing for easier management of stray tabs.</p>
            <div className="row center-xs">
              <a href="https://chrome.google.com/webstore/detail/tabmaster/pojgemmobcnjmnpodjmgeofdgojpkepn">
                <div className="visitButton" style={{backgroundColor: '#03B941'}}>
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="300" src="tabmaster.png" />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

}
