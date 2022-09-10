import { id } from './modules/props.js';
const templateProjects = document.getElementById('templateProjects').content;
export const paint = ({ content, url }) => {
	content.textContent = '';
	const fragment = document.createDocumentFragment();
	url.forEach(item => {
		const clone = templateProjects.cloneNode(true);
		const $ = selector => clone.querySelector(selector);
		$('.project').tabIndex = 0;
		const img = $('.project__conteImg img');
		const title = $('.project__title');
		const technologies = $('.project__technologies');
		const description = $('.project__description');
		const code = $('.code');
		const demo = $('.demo');
		if (document.documentElement.className === 'light') {
			img.src = `./assets/img/projects/${item.imgLight}`;
		} else {
			img.src = `./assets/img/projects/${item.imgDark}`;
		}
		img.alt = item.img;
		title.dataset.value = `titleId-${item.id}`;
		title.textContent = item.title;
		technologies.textContent = '';
		item.technologies.forEach(tec => {
			const span = document.createElement('span');
			span.classList.add('project__item');
			span.textContent = tec;
			technologies.appendChild(span);
		});
		description.dataset.value = `descriptionId-${item.id}`;
		description.textContent = item.description;
		code.href = item.urlCode;
		demo.href = item.urlDemo;
		fragment.appendChild(clone);
	});
	content.appendChild(fragment);
};
// import FrontendMentor from './modules/urlProjects.js';
// const contentProjects = id('contentProjects');
	// paint({ content: contentProjects, url: FrontendMentor });
