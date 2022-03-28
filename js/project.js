import DG from './modules/varConponets.js';
import projects from './modules/urlProjects.js';
const templateProjects = document.getElementById('templateProjects').content;
const contentProjects = DG('contentProjects');
const paint = () => {
	contentProjects.textContent = '';
	const fragmet = document.createDocumentFragment();
	projects.forEach(item => {
		const clone = templateProjects.cloneNode(true);
		const img = clone.querySelector('.project__conteImg img');
		const title = clone.querySelector('.project__title');
		const tecnologies = clone.querySelector('.project__tecnologies');
		const description = clone.querySelector('.project__description');
		const code = clone.querySelector('.code');
		const demo = clone.querySelector('.demo');
		img.setAttribute('src', `./assets/img/projects/${item.img}`);
		img.setAttribute('alt', item.img);
		title.dataset.value = `titlelId-${item.id}`;
		title.textContent = item.title;
		tecnologies.textContent = '';
		item.tecnologies.forEach(tec => {
			const span = document.createElement('span');
			span.classList.add('project__item');
			span.textContent = tec;
			tecnologies.appendChild(span);
		});
		description.dataset.value = `descriptionId-${item.id}`;
		description.textContent = item.description;
		code.setAttribute('href', item.urlCode);
		demo.setAttribute('href', item.urlDemo);
		fragmet.appendChild(clone);
	});
	contentProjects.appendChild(fragmet);
};
paint();
