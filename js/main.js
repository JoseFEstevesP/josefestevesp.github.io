import { id } from './modules/props.js';
import themeDefault, { theme } from './modules/theme.js';
import popupShow, { closePopUp } from './modules/popUp.js';
import { imgDarkMode } from './project.js';
document.addEventListener('DOMContentLoaded', e => {
	themeDefault();
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
		imgDarkMode();
	}
	if (e.target.matches('.voucher__content')) {
		popupShow(e);
	}
	if (e.target.matches('.popup__btn')) {
		closePopUp(e);
	}
});
import './langue.js';
