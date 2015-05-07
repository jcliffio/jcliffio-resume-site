'use strict';

var React = require('react');

var ExternalLink = React.createClass({
  propTypes: {
    url: React.PropTypes.string,
    text: React.PropTypes.string
  },

  render () {
    return (
      <a target="_blank" href={this.props.url}>{this.props.text}</a>
    );
  }
});

module.exports = ExternalLink;
