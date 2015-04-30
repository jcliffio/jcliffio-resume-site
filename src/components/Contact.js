'use strict';

var React = require('react'),
    Scroll = require('react-scroll');

var ScrollElement = Scroll.Element;

var Contact = React.createClass({
  render: function () {
    return (
      <ScrollElement name="contact" className="contact">
        <h1>Contact</h1>
      </ScrollElement>
    );
  }
});

module.exports = Contact;
