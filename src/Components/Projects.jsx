import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Project 1',
      desc: 'An E-Commerce platform utilizing MERN Web technologies',
      liveLink: 'website url',
      githubLink: 'https://github.com/Dennis525/shopify',
      techs: ['React', 'Node', 'MongoDB', 'ExpressJS'],
      isOpenSource: false
    },
    two: {
      name: 'Project 2',
      desc: 'A Note android app using kotlin',
      liveLink: 'https://appetize.io/app/pbhgqpnfpxa2xaluepwxazayku?device=pixel4&osVersion=11.0&scale=75',
      githubLink: 'https://github.com/Dennis525/NoteBook',
      techs: ['Kotlin-android', 'kotlin-coroutines', 'Room-database', 'Jetpack-compose'],
      isOpenSource: false
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
      </div>
    </div>
  )
}

export default Projects;
