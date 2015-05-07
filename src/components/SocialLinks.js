'use strict';

var React = require('react'),
    Icon = require('react-fa');

var socialItems = [
  { iconName: 'linkedin', url: 'http://www.linkedin.com/in/jcliffio' },
  { iconName: 'github', url: 'https://github.com/jcliffio' },
  { iconName: 'codepen', url: 'http://codepen.io/jrclifford/' }
];

var SocialLinks = React.createClass({
  render () {
    var socialLinkItems = socialItems.map((socialItem, index) => {
      return (
        <a key={socialItem.url} href={socialItem.url} target="_blank"><Icon name={socialItem.iconName} fixedWidth={true} /></a>
      );
    });

    return (
      <div className="socialLinks">
        {socialLinkItems}
      </div>
    );
  },
});

module.exports = SocialLinks;
