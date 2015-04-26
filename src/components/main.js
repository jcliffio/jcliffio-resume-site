'use strict';

var React = require('react'),
    Router = require('react-router');

var App = require('./App'),
    About = require('./About'),
    Home = require('./Home'),
    Projects = require('./Projects'),
    Contact = require('./Contact'),
    NotFound = require('./NotFound');

var {
  Route,
  DefaultRoute,
  NotFoundRoute
} = Router;

var content = document.getElementById('content');

var Routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name="about" path="about" handler={About}/>
    <Route name="projects" path="projects" handler={Projects}/>
    <Route name="contact" path="contact" handler={Contact}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
