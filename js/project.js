document.addEventListener('click', e => {
	if (e.target.matches('.project')) {
		e.target.lastElementChild.classList.toggle('project__data--show');
	}
});
