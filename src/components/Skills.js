'use strict';

var React = require('react'),
    Scroll = require('react-scroll');

require('../styles/skills.scss');

var ScrollElement = Scroll.Element;

var skillCategories = [
  {
    name: "Concepts",
    skills: [
      "Agile Developent",
      "N-Tier Architecture",
      "Unit Testing",
      "UI Testing (Selenium)"
    ]
  },
  {
    name: ".NET",
    skills: [
      "ASP.NET MVC/Web API",
      "Entity Framework",
      "Ninject",
      "NHibernate",
      "NUnit"
    ]
  },{
    name: "Front End",
    skills: [
      "HTML5",
      "SASS/LESS/CSS",
      "Javascript/jQuery",
      "Node/NPM",
      "Grunt/Gulp",
      "React",
      "Browserify"
    ]
  },{
    name: "Database",
    skills: [
      "MySql"
    ]
  },{
    name: "Tools",
    skills: [
      "Git",
      "TFS"
    ]
  },
];

var Skills = React.createClass({
  mapSkillsToList (skill, index) {
    return (
      <li>{skill}</li>
    );
  },

  mapSkillCategoriesToDiv (category, index) {
    return (
      <div className="skillsContainer">
        <div className="skillsContainer__header">
          <h3>{category.name}</h3>
        </div>
        <div className="skillsContainer__body">
          <ul>
            {category.skills.map(this.mapSkillsToList)}
          </ul>
        </div>
      </div>
    );
  },

  render () {
    return (
      <ScrollElement name="skills" className="skills">
        <h2>Some stuff I&#39;m experienced in...</h2>
        <div ref="skillCategoriesContainer">
          {skillCategories.map(this.mapSkillCategoriesToDiv)}
        </div>
      </ScrollElement>
    );
  }
});

module.exports = Skills;
