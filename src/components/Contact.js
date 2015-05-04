'use strict';

var React = require('react'),
    Scroll = require('react-scroll');

var ScrollElement = Scroll.Element;

var Contact = React.createClass({
  render: function () {
    return (
      <ScrollElement name="contact" className="contact">
        <p>The easiest way to reach me is at <a href="mailto:joshua.clifford91@gmail.com">joshua.clifford91@gmail.com</a></p>
      </ScrollElement>
    );
  }
});

module.exports = Contact;
