const DG = selector => document.getElementById(selector);
const menuBtn = DG('menuBtn');
menuBtn.addEventListener('click', e => {
	e.target.firstElementChild.classList.toggle('menu__barras--animation');
	e.target.nextElementSibling.firstElementChild.classList.toggle(
		'menu__contMenu--show'
	);
});
