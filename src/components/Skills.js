'use strict';

var React = require('react'),
    Scroll = require('react-scroll');

var ScrollElement = Scroll.Element;

var Skills = React.createClass({
  render: function () {
    return (
      <ScrollElement name="skills" className="skills">
        <h1>Skills</h1>
      </ScrollElement>
    );
  }
});

module.exports = Skills;
