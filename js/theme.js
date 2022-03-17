import DG from './modules/varConponets.js';

const btnTheme = DG('btnTheme');
const iconTheme = DG('iconTheme');
const iconDefoult = DG('iconDefoult');
const prefresDarkScheme = window.matchMedia(
	'(prefers-color-scheme: dark)'
).matches;
const iconThemeOpction = {
	dark: 'sun',
	light: 'moon',
};
const icon = IT => {
	iconDefoult.setAttribute(
		'srcset',
		`assets/icons/${iconThemeOpction[IT]}.svg`
	);
	iconTheme.setAttribute('src', `assets/icons/${iconThemeOpction[IT]}.svg`);
};
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
	document.documentElement.classList.toggle('dark');
	icon(currentTheme);
} else if (currentTheme === 'light') {
	document.documentElement.classList.toggle('light');
	icon(currentTheme);
}
btnTheme.addEventListener('click', e => {
	let theme;
	if (prefresDarkScheme) {
		document.documentElement.classList.toggle('light');
		theme = document.documentElement.classList.contains('light')
			? 'light'
			: 'dark';
		icon(theme);
	} else {
		document.documentElement.classList.toggle('dark');
		theme = document.documentElement.classList.contains('dark')
			? 'dark'
			: 'light';
		icon(theme);
	}
	localStorage.setItem('theme', theme);
});
