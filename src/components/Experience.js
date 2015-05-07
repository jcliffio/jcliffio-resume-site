'use strict';

var React = require('react'),
    Scroll = require('react-scroll'),
    moment = require('moment');

require('../styles/experience.scss');

var ScrollElement = Scroll.Element;

var skillCategories = [
  {
    name: 'Concepts',
    skills: [
      'OOP',
      'Agile Developent',
      'N-Tier Architecture',
      'Unit Testing',
      'UI Testing (Selenium)'
    ]
  },
  {
    name: '.NET',
    skills: [
      'ASP.NET MVC/Web API',
      'Entity Framework',
      'Ninject',
      'NHibernate',
      'NUnit'
    ]
  },
  {
    name: 'Front End',
    skills: [
      'HTML5',
      'SASS/LESS/CSS',
      'Javascript/jQuery',
      'Node/NPM',
      'Grunt/Gulp',
      'React',
      'Browserify'
    ]
  },
  {
    name: 'Database',
    skills: [
      'MySql'
    ]
  },
  {
    name: 'Tools',
    skills: [
      'Git',
      'TFS'
    ]
  },
];

var experienceArray = [
  {
    company: 'Informatics Corporation of America',
    link: 'http://ica-carealign.com/',
    title: 'Application Developer',
    description: 'While at ICA, I worked primarily on an internal application built using ASP.NET MVC, MySQL, jQuery, and LESS. Our application interfaced with multiple intra-team and inter-team REST and SOAP APIs. This was my first major foray into enterprise development, and the amount that I learned while at ICA is astronomical.',
    startDate: new Date(2013, 5),
    endDate: new Date(2015, 3),
  },
  {
    company: 'Computer Services, Inc.',
    link: 'http://www.csiweb.com/',
    title: 'Software Engineering Intern',
    description: 'During this internship, I worked with the DBA group updating some legacy apps to remove dependencies on third-party libraries. I used C# WinForms, Classic ASP, ASP.NET Web Forms, and SQL Server.',
    startDate: new Date(2012, 4),
    endDate: new Date(2012, 11),
  }
];

var Experience = React.createClass({
  renderExperienceRow() {
    return experienceArray.map(function(jobItem, index){
      return (
        <div className="experience__job">
          <div className="job__header">
            <h3>
              <a target="_blank" href={jobItem.link}>{jobItem.company}</a>
              <small> - {jobItem.title}</small>
            </h3>
          </div>
          <div className="job__body">
            <div className="job__dates">
              {moment(jobItem.startDate).format('MMM YYYY')} - {moment(jobItem.endDate).format('MMM YYYY')}
            </div>
            <div className="job__description">{jobItem.description}</div>
          </div>
        </div>
      );
    });
  },

  mapSkills (category) {
    return (
      <div className="skillsContainer">
        <div className="skillsContainer__header">
          <h3>{category.name}</h3>
        </div>
        <div className="skillsContainer__body">
          <ul>
            {category.skills.map(function(skill){
              return (
                <li>{skill}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  },

  render () {
    return (
      <div>
        <ScrollElement name="skills" className="skills">
          <h2>Some stuff I&#39;m experienced in...</h2>
          <div ref="skillCategoriesContainer" className="skillCategoriesContainer">
            {skillCategories.map(this.mapSkills)}
          </div>
        </ScrollElement>
        <ScrollElement name="experience" className="experience">
          <h2>Some places I&#39;ve worked...</h2>
          <div className="experienceRowContainer">
            {this.renderExperienceRow()}
          </div>
        </ScrollElement>
      </div>
    );
  }
});

module.exports = Experience;
