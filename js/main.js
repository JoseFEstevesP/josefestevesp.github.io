import { id } from './modules/props.js';
import themeDefault, { theme } from './modules/theme.js';
import popupShow, { closePopUp } from './modules/popUp.js';
import { paint } from './project.js';
import FrontendMentor from './modules/urlProjects.js';
const contentProjects = id('contentProjects');
document.addEventListener('DOMContentLoaded', e => {
	themeDefault();
	paint({ content: contentProjects, url: FrontendMentor });
});
document.addEventListener('click', e => {
	if (e.target.matches('#menuBtn')) {
		e.target.firstElementChild.classList.toggle('menu__bar--animation');
		e.target.parentElement.nextElementSibling.classList.toggle(
			'menu__nav--show'
		);
	}
	if (e.target.matches('#btnTheme')) {
		theme();
		paint({ content: contentProjects, url: FrontendMentor });
	}
	if (e.target.matches('.voucher__content')) {
		popupShow(e);
	}
	if (e.target.matches('.popup__btn')) {
		closePopUp(e);
	}
});
import './langue.js';


