import { Lang } from '../../language/language.js';
const FrontendMentor = [
	{
		id: 1,
		title: Lang[localStorage.getItem('lang')].projects['titleId-1'],
		imgDark: 'pokeApiDark.png',
		imgLight: 'pokeApiLight.png',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		description: Lang[localStorage.getItem('lang')].projects['descriptionId-1'],
		urlCode: 'https://github.com/JoseFEstevesP/pokeAPI',
		urlDemo: 'https://josefestevesp.github.io/pokeAPI/',
	},
	{
		id: 2,
		title: Lang[localStorage.getItem('lang')].projects['titleId-2'],
		imgDark: 'sgcnDarck.png',
		imgLight: 'sgcnLight.png',
		technologies: ['JavaScript', 'ReactJS'],
		description: Lang[localStorage.getItem('lang')].projects['descriptionId-2'],
		urlDemo: 'https://fronend-note.vercel.app/',
	},
];
export default FrontendMentor;
