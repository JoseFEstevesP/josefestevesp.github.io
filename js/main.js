import './components/technologies.js';
import './langue.js';
import popupShow, { closePopUp } from './modules/popUp.js';
import { $ } from './modules/props.js';
import themeDefault, { theme } from './modules/theme.js';
import FrontendMentor from './modules/urlProjects.js';
import { paint } from './project.js';
document.addEventListener('DOMContentLoaded', () => themeDefault());
document.addEventListener('click', e => {
	if (e.target.matches('#menuBtn')) {
		e.target.firstElementChild.classList.toggle('menu__bar--animation');
		e.target.parentElement.nextElementSibling.classList.toggle(
			'menu__nav--show'
		);
	}
	if (e.target.matches('#btnTheme')) {
		theme();
		imgDarkMode();
	}
	if (e.target.matches('.voucher__content')) {
		popupShow(e);
	}
	if (e.target.matches('.popup__btn')) {
		closePopUp(e);
	}
});
let target;
document.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		if (e.target.matches('.voucher__content')) {
			target = e.target;
			popupShow(e);
			setTimeout(() => {
				$('.popup__btn').focus();
			}, 500);
		}
		if (e.target.matches('.popup__btn')) {
			setTimeout(() => {
				target.focus();
			}, 500);
		}
	}
});
const contentProjects = document.getElementById('contentProjects');
contentProjects.appendChild(paint({ url: FrontendMentor }));
const allProjectsImgElements = document.querySelectorAll('.project__img');
const imgDarkMode = () => {
	for (const imgElements of allProjectsImgElements) {
		if (localStorage.getItem('theme') === 'dark') {
			imgElements.src = imgElements.dataset.urldark;
			imgElements.alt = imgElements.dataset.urldark;
		} else {
			imgElements.src = imgElements.dataset.urllight;
			imgElements.alt = imgElements.dataset.urllight;
		}
	}
};
