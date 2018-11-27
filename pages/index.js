/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from "react";
import Header from "../components/Header";
import BigText from "../components/BigText";
import SocialMedia from "../components/Socialmedia";
import Grid from "../components/Grid";
import ProjectBox from "../components/ProjectBox";
import Modal from "../components/Modal";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: ""
    };
  }
  showProject(project) {
    this.setState({ show: project });
  }
  hideProject() {
    this.setState({ show: "" });
  }
  render() {
    return (
      <div className="page">
        <div className="showing">
          <Header />
          <BigText>Student, Cognitive Architect.</BigText>
          <SocialMedia />
          <Grid title="Projects">
            <ProjectBox
              clicked={item => this.showProject(item)}
              title="Semantic Calculator"
              image="semantic.png"
            />
            <ProjectBox
              clicked={item => this.showProject(item)}
              title="LiquidTime"
              image="liquidtime.png"
            />
            <ProjectBox
              clicked={item => this.showProject(item)}
              title="Spotify Offline"
              image="spotify-offline.png"
            />
            <ProjectBox
              clicked={item => this.showProject(item)}
              title="A-Frame Components"
              image="aframe.png"
            />
          </Grid>
          <Grid title="Experience">
            <ProjectBox
              clicked={item => this.showProject(item)}
              title="Formlabs"
              image="formlabs.png"
            />
            <ProjectBox
              clicked={item => this.showProject(item)}
              title="MAHacks"
              image="mahacks.png"
            />
            <ProjectBox
              clicked={item => this.showProject(item)}
              title="MIT Racecar"
              image="racecar.png"
            />
          </Grid>
          <Section title="About">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <p>
                  I'm a designer & developer from the Boston area studying at
                  Carnegie Mellon. I'm particularly interested in cognitive and
                  dynamic media; tools that facilitate thought and creativity in
                  new ways.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12">
                <p>
                  Some other interests of mine include programming language
                  theory, artificial intelligence, and communication design.
                </p>
                <p>
                  You can view my resume <a href="resume.pdf">here</a>.
                </p>
              </div>
            </div>
          </Section>
          <Footer />
        </div>
        <Modal
          show={this.state.show === "Semantic Calculator"}
          back={() => this.hideProject()}
          title="Semantic Calculator"
        >
          <div className="col-sm-6 col-xs-12">
            <p>
              I created a tool for exploring how word embeddings relate to each
              other through an interactive REPL interface. My process involved
              experiments with interfaces that facilitate understanding of
              machine learning models.
            </p>
            <div className="row center-xs">
              <a href="https://semantic.a9.io">
                <div
                  className="visitButton"
                  style={{ backgroundColor: "#4A90E2" }}
                >
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="50%" src="semantic.png" />
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          show={this.state.show === "LiquidTime"}
          back={() => this.hideProject()}
          title="LiquidTime"
        >
          <div className="col-sm-6 col-xs-12">
            <p>I developed and designed a time management and tracking app.</p>
            <p>
              It has an emphasis on making every plan fit, with easy
              rescheduling and pomodoro-style timing.
            </p>
            <p>
              It reached the top of{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://news.ycombinator.com"
              >
                Hacker News
              </a>{" "}
              and{" "}
              <a
                href="https://producthunt.com"
                style={{ textDecoration: "underline" }}
              >
                Product Hunt
              </a>
              . To date,{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://liquidti.me/about"
              >
                thousands of hours
              </a>{" "}
              of productivity have been logged by thousands of users.
            </p>
            <div className="row center-xs">
              <a href="https://liquidti.me">
                <div
                  className="visitButton"
                  style={{ backgroundColor: "#5850ff" }}
                >
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="100%" src="liquidtime.png" />
              </div>
              <iframe
                style={{ border: "none" }}
                src="https://cards.producthunt.com/cards/posts/80262?v=1"
                width="100%"
                height="405"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              />
            </div>
          </div>
        </Modal>

        <Modal
          show={this.state.show === "Formlabs"}
          back={() => this.hideProject()}
          title="Formlabs"
        >
          <div className="col-sm-6 col-xs-12">
            <p>
              Over the Summer of 2017, I helped the{" "}
              <a href="https://formlabs.com">Formlabs</a> web team build
              internal and user-facing systems for the company's (awesome) 3D
              printers.
            </p>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="50%" src="magnitude.png" />
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          show={this.state.show === "A-Frame Components"}
          back={() => this.hideProject()}
          title="A-Frame Components"
        >
          <div className="col-sm-6 col-xs-12">
            <p>
              I developed several open source components for Mozilla's{" "}
              <a href="https://aframe.io">A-Frame</a> VR platform, a framework
              which aims to make WebVR development more accessible.
            </p>
            <p>
              They focus on implementation of the HTML5 canvas API on a flat VR
              surface, opening potential for 2d interfaces, text, images, and
              graphics within a virtual world.
            </p>
            <div className="row center-xs">
              <a href="https://github.com/maxkrieger/aframe-draw-component">
                <div
                  className="visitButton"
                  style={{ backgroundColor: "#ef2d5e" }}
                >
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="100%" src="aframe-text.png" />
                <a href="https://aframe.io/blog/aframe-v0.2.0/">
                  <img width="100%" src="aframe-post.png" />
                </a>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          show={this.state.show === "MAHacks"}
          back={() => this.hideProject()}
          title="MAHacks"
        >
          <div className="col-sm-6 col-xs-12">
            <p>
              I developed the brand identity, materials, and website of a series
              of Massachusetts high school hackathons with over one hundred
              attendees.
            </p>
            <p>
              The events were hosted at the MIT Stata Center in Cambridge and
              Canopy City Coworking in Somerville.
            </p>
            <div className="row center-xs">
              <a href="http://mahacks.com">
                <div
                  className="visitButton"
                  style={{ backgroundColor: "#14ADC2" }}
                >
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="100%" src="mahacks.png" />
                <img width="100%" src="mascreen.png" />
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          show={this.state.show === "MIT Racecar"}
          back={() => this.hideProject()}
          title="MIT Beaverworks Racecar"
        >
          <div className="col-sm-6 col-xs-12">
            <p>
              In the summer of 2016, I participated in MIT/Lincoln Laboratories'
              first institute for high schoolers. We were tasked with an
              engineering project - automating a remote control car with
              multiple sensors and an Nvidia Jetson GPU.
            </p>
            <p>
              I had the privilege of seeing countless lecturers visit to talk
              about working in the field of mobile robotics and automation. In
              addition, MIT professors and colleagues of Lincoln Laboratories
              conducted seminars on developing control systems, localization,
              and computer vision for mobile robots
            </p>
            <p>
              I collaborated with{" "}
              <a href={"http://august.codes/"}>August Trollbäck</a> on writing a
              report following the program.
            </p>
            <div className="row center-xs">
              <a href="http://a9.io/bwsi-report/">
                <div
                  className="visitButton"
                  style={{ backgroundColor: "#0351B9" }}
                >
                  View Report
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="100%" src="racecar.png" />
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          show={this.state.show === "Tabmaster"}
          back={() => this.hideProject()}
          title="Tabmaster"
        >
          <div className="col-sm-6 col-xs-12">
            <p>
              Tabmaster is a chrome extension allowing for easier management of
              stray tabs.
            </p>
            <div className="row center-xs">
              <a href="https://chrome.google.com/webstore/detail/tabmaster/pojgemmobcnjmnpodjmgeofdgojpkepn">
                <div
                  className="visitButton"
                  style={{ backgroundColor: "#03B941" }}
                >
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="100%" src="tabmaster.png" />
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          show={this.state.show === "Spotify Offline"}
          back={() => this.hideProject()}
          title="Spotify Offline"
        >
          <div className="col-sm-6 col-xs-12">
            <p>
              I explored how one can better manage their disk space with their
              Spotify offline music. What resulted was a concept that expanded
              upon Spotify's existing style.
            </p>
            <div className="row center-xs">
              <a href="https://www.behance.net/gallery/40743493/Spotify-Offline-Concept-Experience">
                <div
                  className="visitButton"
                  style={{ backgroundColor: "#1ED760" }}
                >
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="100%" src="spotify-offline.png" />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
