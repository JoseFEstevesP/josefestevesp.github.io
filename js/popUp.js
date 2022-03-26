import { Q } from './modules/varConponets.js';
const voucher = Q('.voucher');
voucher.addEventListener('click', e => {
	if (e.target.matches('.voucher__content')) {
		e.target.parentElement.nextElementSibling.lastElementChild.firstElementChild.setAttribute(
			'src',
			e.target.firstElementChild.getAttribute('src')
		);
		e.target.parentNode.nextElementSibling.classList.add('popup--show');
		e.target.parentElement.nextElementSibling.lastElementChild.classList.add(
			'popup__content--show'
		);
		e.target.ownerDocument.body.classList.toggle('bodyScroll');
	}
	if (e.target.matches('.popup__btn')) {
		e.target.nextElementSibling.classList.remove('popup__content--show');
		e.target.parentElement.classList.remove('popup--show');
		e.target.ownerDocument.body.classList.toggle('bodyScroll');

		// e.target.nextElementSibling.firstElementChild.setAttribute('src', '#');
	}
});
