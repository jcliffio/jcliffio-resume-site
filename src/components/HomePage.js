'use strict';

var React = require('react');

var Welcome = require('./Welcome.js'),
    About = require('./About.js'),
    Projects = require('./Projects.js'),
    Contact = require('./Contact.js');

var HomePage = React.createClass({
  render () {
    return (
      <div className="homePage">
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
});

module.exports = HomePage;
