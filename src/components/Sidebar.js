'use strict';

var React = require('react'),
    Router = require('react-router'),
    Icon = require('react-fa'),
    Scroll = require('react-scroll');

var ScrollLink = Scroll.Link;

require('../styles/sidebar.scss');

var socialLinks = [
  { iconName: "linkedin", url: "http://www.linkedin.com/in/jcliffio" },
  { iconName: "github", url: "https://github.com/jcliffio" },
  { iconName: "codepen", url: "http://codepen.io/jrclifford/" }
];

var navLinks = [
  { text: "Home", elementName: "welcome" },
  { text: "About", elementName: "about" },
  { text: "Skills", elementName: "skills" },
  //{ text: "Projects", elementName: "projects" },
  { text: "Experience", elementName: "experience" },
  { text: "Contact", elementName: "contact" }
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
    return socialLinks.map((socialLink, index) => {
      return (
        <a key={socialLink.url} href={socialLink.url} target="_blank"><Icon name={socialLink.iconName} fixedWidth={true} /></a>
      );
    });
  },

  renderNavLinks () {
    return navLinks.map((navLink, index) => {
      return (
        <li key={navLink.text}><ScrollLink to={navLink.elementName} smooth={true} duration={300}>{navLink.text}</ScrollLink></li>
      );
    });
  },

  render () {
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
