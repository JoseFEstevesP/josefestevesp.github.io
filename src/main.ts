import './components/info/Info.ts';
import './components/project/Project.ts';
import './components/technologyTools/TechnologyTools.ts';
import './components/welcome/Welcome.ts';
import projects from './data/projects.json';
import technologies from './data/technology.json';
import tools from './data/tools.json';

const projectsElement = document.querySelector('#projects');
projectsElement?.setAttribute('projects', JSON.stringify(projects));

const toolsElement = document.querySelector('#tools');
toolsElement?.setAttribute('tools', JSON.stringify(tools));

const technologiesElement = document.querySelector('#technologies');
technologiesElement?.setAttribute('tools', JSON.stringify(technologies));
