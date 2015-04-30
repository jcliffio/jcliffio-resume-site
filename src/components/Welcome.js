'use strict';

var React = require('react'),
    Scroll = require('react-scroll');

var ScrollElement = Scroll.Element;

require('../styles/welcome.scss');

var Welcome = React.createClass({
  renderHello () {
    return (
      <div className="welcome__hello">
        <div className="hello__hi">Hi!</div>
        <div className="hello__introduction">I&#39;m Josh Clifford...</div>
      </div>
    );
  },

  renderSelfPortrait () {
    return (
      <div className="welcome_portrait">
        <img id="portrait" src="/images/self-portrait.svg" alt="svg y u no load???" />
      </div>
    );
  },

  render () {
    return (
      <ScrollElement name="welcome" className="welcome">
        {this.renderHello()}
        {this.renderSelfPortrait()}
      </ScrollElement>
    );
  }
});

module.exports = Welcome;
