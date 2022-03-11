const DG = selector => document.getElementById(selector);
// menu
const menuBtn = DG('menuBtn');
menuBtn.addEventListener('click', e => {
	e.target.firstElementChild.classList.toggle('menu__barras--animation');
	e.target.nextElementSibling.firstElementChild.classList.toggle(
		'menu__contMenu--show'
	);
});
// theme
const btnTheme = DG('btnTheme');
let theme = localStorage.getItem('theme');
if (theme) document.documentElement.dataset.theme = theme;
btnTheme.addEventListener('click', e => {
	let curretTheme = document.documentElement.getAttribute('data-theme');
	let targetTheme = 'light';
	if (curretTheme === 'light') {
		targetTheme = 'dark';
	}
	document.documentElement.dataset.theme = targetTheme;
	localStorage.setItem('theme', targetTheme);
	const iconThemeObject = {
		dark: 'sun-solid',
		light: 'moon-solid',
	};
	const iconTheme = iconThemeObject[targetTheme];
	e.target.firstElementChild.lastElementChild.setAttribute(
		'src',
		`./assets/icons/${iconTheme}.svg`
	);
	e.target.firstElementChild.firstElementChild.setAttribute(
		'srcset',
		`./assets/icons/${iconTheme}.svg`
	);
});
