import { $ } from './modules/props.js';
import themeDefault, { theme } from './modules/theme.js';
import popupShow, { closePopUp } from './modules/popUp.js';
import { imgDarkMode } from './project.js';
import './components/technologies.js'
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
import './langue.js';
