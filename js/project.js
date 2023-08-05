const templateProjects = document.getElementById('templateProjects').content;
export const paint = ({ url }) => {
	const fragment = document.createDocumentFragment();
	url.forEach(item => {
		const clone = templateProjects.cloneNode(true);
		const $ = selector => clone.querySelector(selector);
		const img = $('.project__img');
		if (localStorage.getItem('theme') === 'dark') {
			img.src = `./assets/img/projects/${item.imgDark}`;
			img.alt = `Imagen del proyecto ${item.title} ${item.imgDark}`;
		} else {
			img.src = `./assets/img/projects/${item.imgLight}`;
			img.alt = `Imagen del proyecto ${item.title} ${item.imgLight}`;
		}
		img.dataset.urllight = `./assets/img/projects/${item.imgLight}`;
		img.dataset.urldark = `./assets/img/projects/${item.imgDark}`;
		const title = $('.project__title');
		title.textContent = '';
		title.dataset.value = `titleId-${item.id}`;
		title.textContent = item.title;
		const technologies = $('.project__technologies');
		technologies.textContent = '';
		item.technologies.forEach(tec => {
			const span = document.createElement('span');
			span.classList.add('project__item');
			span.textContent = tec;
			technologies.appendChild(span);
		});
		const description = $('.project__description');
		description.dataset.value = `descriptionId-${item.id}`;
		description.textContent = item.description;
		const code = $('.code');
		if (!item.urlCode) {
			code.classList.add('btn--hidden');
		}
		code.href = item.urlCode;
		const demo = $('.demo');
		if (!item.urlDemo) {
			demo.classList.add('btn--hidden');
		}
		demo.href = item.urlDemo;
		fragment.appendChild(clone);
	});
	return fragment;
};
