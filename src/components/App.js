'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Sidebar = require('./Sidebar.js');
var ReactTransitionGroup = React.addons.TransitionGroup;

var { RouteHandler } = Router;

// CSS
require('normalize.css');
require('../styles/main.scss');

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
        <div className="sidebarOpener" onClick={this.handleSidebarToggle.bind(this, true)}></div>
        <Sidebar
          isOpen={this.state.isSidebarOpen}
          onToggle={this.handleSidebarToggle}
        />
        <div className="Content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = App;
