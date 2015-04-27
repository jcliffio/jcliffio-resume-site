'use strict';

var React = require('react');
var Router = require('react-router');
var Icon = require('react-fa');

var { Link } = Router;

require('../styles/sidebar.scss');

var socialLinks = [
  { iconName: "linkedin", url: "http://www.linkedin.com/in/jcliffio" },
  { iconName: "github", url: "https://github.com/jcliffio" }
];

var navLinks = [
  { text: "Home", route: "/" },
  { text: "About", route: "about" },
  { text: "Projects", route: "projects" },
  { text: "Contact", route: "contact" },
];

var Sidebar = React.createClass({
  propTypes: {
    isOpen: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired
  },

  handleToggle (isOpen) {
    this.props.onToggle(isOpen);
  },

  renderSocialLinks () {
    return socialLinks.map((link, index) => {
      return (
        <a href={link.url} target="_blank"><Icon name={link.iconName} fixedWidth={true} /></a>
      );
    });
  },

  renderNavLinks () {
    return navLinks.map((link, index) => {
      return (
        <li><Link to={link.route}>{link.text}</Link></li>
      );
    });
  },

  render: function () {
    var sidebarClassName = this.props.isOpen ? "sidebar" : "sidebar sidebar--hidden";
    return (
      <div className={sidebarClassName}>
        <div className="sidebar__header">
          <div className="sidebar__closer" onClick={this.handleToggle.bind(this, false)}>
            <Icon name="arrow-right" />
          </div>
          <div className="sidebar__socialLinks">
            {this.renderSocialLinks()}
          </div>
        </div>
        <ul className="sidebar__navLinks">
          {this.renderNavLinks()}
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;
