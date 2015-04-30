'use strict';

var React = require('react'),
    Scroll = require('react-scroll');

var ScrollElement = Scroll.Element;

var Experience = React.createClass({
  render: function () {
    return (
      <ScrollElement name="experience" className="experience">
        <h1>Experience</h1>
      </ScrollElement>
    );
  }
});

module.exports = Experience;
