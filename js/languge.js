import DG, { QAll } from './modules/varConponets.js';

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
		textToChange.innerHTML = texts[section][value];
	}
};
languageOption.addEventListener('click', e => {
	changeLanguage(e.target.dataset.language);
	language.dataset.lang = e.target.dataset.language;
	localStorage.setItem('lang', e.target.dataset.language);
});
if (localStorage.getItem('lang')) {
	changeLanguage(localStorage.getItem('lang'));
	language.dataset.lang = localStorage.getItem('lang');
} else {
	const defaultLagn = window.navigator.language.split('-');
	changeLanguage(defaultLagn[0]);
	language.dataset.lang = defaultLagn[0];
	console.log(defaultLagn[0]);
}
