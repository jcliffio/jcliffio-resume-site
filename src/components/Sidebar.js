'use strict';

var React = require('react');
var Router = require('react-router');

var { Link } = Router;

require('../styles/sidebar.scss');

var Sidebar = React.createClass({
  propTypes: {
    isOpen: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired
  },

  handleToggle (isOpen) {
    this.props.onToggle(isOpen);
  },

  render: function () {
    var sidebarClassName = this.props.isOpen ? "sidebar" : "sidebar sidebar--hidden";
    return (
      <div className={sidebarClassName}>
        <button className="sidebar__closer" onClick={this.handleToggle.bind(this, false)}>Close</button>
        <ul className="sidebar__navlinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;
