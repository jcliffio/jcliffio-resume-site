'use strict';

var React = require('react'),
    Scroll = require('react-scroll'),
    SocialLinks = require('./SocialLinks.js');

require('../styles/contact.scss');

var ScrollElement = Scroll.Element;

var Contact = React.createClass({
  render () {
    return (
      <ScrollElement name="contact" className="contact">
        <p>The easiest way to reach me is at
          <a href="mailto:joshua.clifford91@gmail.com">
            &nbsp;joshua.clifford91@gmail.com
          </a>
        </p>
        <SocialLinks />
      </ScrollElement>
    );
  }
});

module.exports = Contact;
