import './components/info/Info.js';
import './components/project/Project.js';
import './components/technologyTools/TechnologyTools.js';
import './components/welcome/Welcome.js';

const fetchFunc = async (url, options) => {
	const response = await fetch(url, options);
	return await response.json();
};
document.addEventListener('DOMContentLoaded', async () => {
	const tools = await fetchFunc('./data/tools.json');
	const technologies = await fetchFunc('./data/technology.json');
	const projects = await fetchFunc('./data/projects.json');

	const toolsElement = document.querySelector('#tools');
	toolsElement?.setAttribute('tools', JSON.stringify(tools));

	const technologiesElement = document.querySelector('#technologies');
	technologiesElement?.setAttribute('tools', JSON.stringify(technologies));

	const projectsElement = document.querySelector('#projects');
	projectsElement?.setAttribute('projects', JSON.stringify(projects));
});
