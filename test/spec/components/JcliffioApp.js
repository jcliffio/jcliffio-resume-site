'use strict';

describe('JcliffioApp', function () {
  var React = require('react/addons');
  var JcliffioApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    JcliffioApp = require('components/JcliffioApp.js');
    component = React.createElement(JcliffioApp);
  });

  it('should create a new instance of JcliffioApp', function () {
    expect(component).toBeDefined();
  });
});
