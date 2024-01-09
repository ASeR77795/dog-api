import { key } from './key.js';
import { renderBreeds } from './breeds.js';
import { renderVoting } from './voting.js';
import { renderFavs } from './favs.js';

const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
const navBtn = document.querySelector('.block__nav');
const buttons = document.querySelectorAll('.nav__btn');

navBtn.addEventListener('click', event => {
	const btn = event.target.closest('.nav__btn');
	if (!btn) return;

	buttons.forEach(button => {
		button.classList.remove('active-nav');
	});

	const value = btn.dataset.value;
	if (value.includes('voting')) {
		console.log(btn);
		btn.classList.add('active-nav');
		renderVoting();
	}
	if (value.includes('breeds')) {
		console.log(btn);
		btn.classList.add('active-nav');
		renderBreeds();
	}
	if (value.includes('favs')) {
		console.log(btn);
		btn.classList.add('active-nav');
		renderFavs();
	}
});
