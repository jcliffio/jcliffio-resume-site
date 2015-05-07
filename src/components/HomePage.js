'use strict';

var React = require('react'),
    Welcome = require('./Welcome.js'),
    Experience = require('./Experience.js'),
    Contact = require('./Contact.js');

var HomePage = React.createClass({
  render () {
    return (
      <div className="homePage">
        <Welcome />
        <Experience />
        <Contact />
      </div>
    );
  }
});

module.exports = HomePage;
