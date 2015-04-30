'use strict';

var React = require('react'),
    Scroll = require('react-scroll');

var ScrollElement = Scroll.Element;

var Projects = React.createClass({
  render: function () {
    return (
      <ScrollElement name="projects" className="projects">
        <h1>Projects</h1>
      </ScrollElement>
    );
  }
});

module.exports = Projects;
