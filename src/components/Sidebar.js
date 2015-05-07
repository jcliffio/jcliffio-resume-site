'use strict';

var React = require('react'),
    Icon = require('react-fa'),
    Scroll = require('react-scroll'),
    SocialLinks = require('./SocialLinks.js');

var ScrollLink = Scroll.Link;

require('../styles/sidebar.scss');

var navLinks = [
  { text: 'Home', elementName: 'welcome' },
  { text: 'About', elementName: 'about' },
  { text: 'Skills', elementName: 'skills' },
  { text: 'Experience', elementName: 'experience' },
  { text: 'Contact', elementName: 'contact' }
];

var Sidebar = React.createClass({
  propTypes: {
    isOpen: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired
  },

  handleToggle (isOpen) {
    this.props.onToggle(isOpen);
  },

  renderNavLinks () {
    return navLinks.map((navLink, index) => {
      return (
        <li key={navLink.text}>
          <ScrollLink to={navLink.elementName} smooth={true} duration={300}>
            {navLink.text}
          </ScrollLink>
        </li>
      );
    });
  },

  render () {
    var sidebarClassName = this.props.isOpen
                           ? 'sidebar'
                           : 'sidebar sidebar--hidden';
    return (
      <div className={sidebarClassName}>
        <div className="sidebar__header">
          <div className="sidebar__closer" onClick={this.handleToggle.bind(this, false)}>
            <Icon name="arrow-right" />
          </div>
          <div className="sidebar__socialLinks">
            <SocialLinks />
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
