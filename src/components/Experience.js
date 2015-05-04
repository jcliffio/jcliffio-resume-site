'use strict';

var React = require('react'),
    Scroll = require('react-scroll'),
    moment = require('moment');

var ScrollElement = Scroll.Element;

var experienceArray = [
  {
    company: "Informatics Corporation of America",
    title: "Application Developer",
    description: "Test1",
    startDate: new Date(2013, 6),
    endDate: new Date(2015,4)
  },
  {
    company: "Computer Services, Inc.",
    title: "Software Engineering Intern",
    description: "Test2",
    startDate: new Date(2012, 5),
    endDate: new Date(2012, 12)
  }
];

var Experience = React.createClass({
  renderExperienceRow() {
    return experienceArray.map(function(jobItem, index){
      return (
        <div>
          <h3>{jobItem.company}</h3>
          <div>{jobItem.title}</div>
          <div>{moment(jobItem.startDate).format("MMM YYYY")} - {moment(jobItem.endDate).format("MMM YYYY")}</div>
          <div>{jobItem.description}</div>
        </div>
      );
    });
  },

  render: function () {
    return (
      <ScrollElement name="experience" className="experience">
        <h2>Experience</h2>
        {this.renderExperienceRow()}
      </ScrollElement>
    );
  }
});

module.exports = Experience;
