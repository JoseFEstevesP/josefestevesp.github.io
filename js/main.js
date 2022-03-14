const DG = selector => document.getElementById(selector);
const QAll = selector => document.querySelectorAll(selector);
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
// languge
const language = DG('language');
language.addEventListener('click', e => {
	e.target.nextElementSibling.classList.toggle('contentLanguage--show');
});
const languageOption = DG('languageOption');
const textsToChange = QAll('[data-section]');
const changeLanguage = async language => {
	const requestJson = await fetch(`./language/${language}.json`);
	const texts = await requestJson.json();
	for (const textToChange of textsToChange) {
		const section = textToChange.dataset.section;
		const value = textToChange.dataset.value;
		textToChange.textContent = texts[section][value];
	}
};
languageOption.addEventListener('click', e => {
	changeLanguage(e.target.parentElement.dataset.language);
	language.dataset.lang = e.target.parentElement.dataset.language;
	localStorage.setItem('lang', e.target.parentElement.dataset.language);
});
console.log(localStorage.getItem('lang'));
if (localStorage.getItem('lang')) {
	changeLanguage(localStorage.getItem('lang'));
	language.dataset.lang = localStorage.getItem('lang');
} else {
	changeLanguage(window.navigator.language);
	language.dataset.lang = window.navigator.language;
}
