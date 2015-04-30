'use strict';

var React = require('react/addons'),
    Icon = require('react-fa'),
    Sidebar = require('./Sidebar.js'),
    HomePage = require('./HomePage.js');

// CSS
require('normalize.css');
require('../styles/app.scss');

var App = React.createClass({
  getInitialState () {
    return {
      isSidebarOpen: false,
    };
  },

  handleSidebarToggle (isOpen){
    this.setState({ isSidebarOpen: isOpen });
  },

  render: function () {
    return (
      <div>
      <div className="sidebarOpener" onClick={this.handleSidebarToggle.bind(this, true)}>
        <Icon name="bars" />
      </div>
      <Sidebar
        isOpen={this.state.isSidebarOpen}
        onToggle={this.handleSidebarToggle}
      />
        <div className="content">
          <HomePage />
        </div>
      </div>
    );
  }
});

module.exports = App;
