'use strict';

var React = require('react'),
    Scroll = require('react-scroll'),
    ExternalLink = require('./ExternalLink.js');

var ScrollElement = Scroll.Element;

require('../styles/about.scss');

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
          I graduated from <ExternalLink url="http://www.murraystate.edu" text="Murray State University" /> in 2013 with a Bachelor&#39;s Degree in Computer Science.
          While at Murray, I tried to keep my education diverse by experimenting in different technologies, namely .NET, Android, Arduino.
        </p>
        <p>
          Post-college, I have narrowed my focus to primarily web development. I love all aspects of it, both front end and back end. From CSS to APIs, webdev is such a vibrant and varied domain, I find it next to impossible to get bored with it.
        </p>
        <p>
          The bulk of my professional work so far has been in ASP.NET MVC and .NET in general; however, I have begun branching out into other areas of web development, namely JS frameworks and front end design.
        </p>
      </ScrollElement>
    );
  }
});

module.exports = About;
