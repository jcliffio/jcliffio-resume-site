'use strict';

var React = require('react'),
    About = require('./About.js'),
    Projects = require('./Projects.js'),
    Contact = require('./Contact.js');

require('../styles/home.scss');

var Home = React.createClass({

  renderHello () {
    return (
      <div className="homePage__hello">
        <div className="hello__hi">Hi!</div>
        <div className="hello__introduction">I&#39;m Josh Clifford...</div>
      </div>
    );
  },

  renderSelfPortrait () {
    return (
      <div className="homePage_portrait">
        <img id="portrait" src="/images/self-portrait.svg" alt="svg y u no load???" />
      </div>
    );
  },

  render () {
    return (
      <div className="homePage">
        {this.renderHello()}
        {this.renderSelfPortrait()}
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
});

module.exports = Home;
