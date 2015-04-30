'use strict';

var React = require('react'),
    Scroll = require('react-scroll');

var ScrollElement = Scroll.Element;

require('../styles/about.scss');

var ExternalLink = React.createClass({
  propTypes: {
    url: React.PropTypes.string,
    text: React.PropTypes.string
  },

  render () {
    return (
      <a target="_blank" href={this.props.url}>{this.props.text}</a>
    );
  }
});

var About = React.createClass({
  calculateAge () {
    var myBirthdate = new Date(1991, 6, 10);
    return ~~((Date.now() - myBirthdate) / (31557600000));
  },

  render () {
    return (
      <ScrollElement name="about" className="about">
        <p>
          ...and I&#39;m a {this.calculateAge()}-year-old software engineer from the little town of <ExternalLink url="https://www.google.com/maps/place/Mayfield,+KY+42066/" text="Mayfield, Ky" />.
          I thoroughly enjoy programming, listening to music (if it&#39;s not playing from my speakers, it&#39;s playing in my head), and spending time with my wife and family.
        </p>
        <p>
          I graduated in 2013 from <ExternalLink url="http://www.murraystate.edu" text="Murray State University" /> with a Bachelor&#39;s Degree in Computer Science.
          While at Murray, I tried to keep my education broad by experimenting with many different domains and technologies, namely web development, .NET, Android, and Arduino.
        </p>
      </ScrollElement>
    );
  }
});

module.exports = About;
