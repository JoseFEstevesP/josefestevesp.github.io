const imgPopUP = document.querySelector('.popup');
export default function popupShow(e) {
	const imgVoucher = e.target.firstElementChild;
	imgPopUP.lastElementChild.firstElementChild.src = imgVoucher.src;
	imgPopUP.classList.toggle('popup--show');
	imgPopUP.lastElementChild.classList.toggle('popup__content--show');
	e.target.ownerDocument.body.classList.toggle('bodyScroll');
}
export const closePopUp = e => {
	e.target.nextElementSibling.classList.toggle('popup__content--show');
	e.target.parentElement.classList.toggle('popup--show');
	e.target.nextElementSibling.lastElementChild.src = '#';
	e.target.ownerDocument.body.classList.toggle('bodyScroll');
};
