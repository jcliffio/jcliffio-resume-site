'use strict';

var React = require('react');

var Welcome = require('./Welcome.js'),
    About = require('./About.js'),
    Skills = require('./Skills.js'),
    Projects = require('./Projects.js'),
    Experience = require('./Experience.js'),
    Contact = require('./Contact.js');

var HomePage = React.createClass({
  render () {
    return (
      <div className="homePage">
        <Welcome />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    );
  }
});

module.exports = HomePage;
