import {id, $$ } from './modules/props.js';

const language = id('language');
language.addEventListener('click', e => {
	e.target.nextElementSibling.classList.toggle('contentLanguage--show');
});
const languageOption = id('languageOption');
const textsToChange = $$('[data-section]');
const changeLanguage = async language => {
	const requestJson = await fetch(`./language/${language}.json`);
	const texts = await requestJson.json();
	for (const textToChange of textsToChange) {
		const section = textToChange.dataset.section;
		const value = textToChange.dataset.value;
		textToChange.innerHTML = texts[section][value];
	}
};
languageOption.addEventListener('click', e => {
	changeLanguage(e.target.dataset.language);
	language.dataset.lang = e.target.dataset.language;
	document.documentElement.lang= e.target.dataset.language
	localStorage.setItem('lang', e.target.dataset.language);
});
if (localStorage.getItem('lang')) {
	changeLanguage(localStorage.getItem('lang'));
	document.documentElement.lang= localStorage.getItem('lang')
	language.dataset.lang = localStorage.getItem('lang');
} else {
	const defaultLangue = window.navigator.language.split('-');
	changeLanguage(defaultLangue[0]);
	language.dataset.lang = defaultLangue[0];
	document.documentElement.lang= defaultLangue[0]
	localStorage.setItem('lang', defaultLangue[0]);
}
