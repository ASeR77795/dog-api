import { arr } from './voting.js';

const content = document.querySelector('.block__content');

export const renderFavs = () => {
	if (arr.length !== 0) {
		const uniqueArray = arr.filter(
			(value, index, self) => self.indexOf(value) === index
		);
		console.log(uniqueArray);
		localStorage.setItem('favorite', JSON.stringify(uniqueArray));
	}

	const favs = `<h1>Nothing in favs</h1>`;
	content.innerHTML = favs;
	const storedFavs = JSON.parse(localStorage.getItem('favorite'));

	if (storedFavs && storedFavs.length !== 0) {
		const box = document.createElement('div');
		box.classList.add('box');

		const boxContent = storedFavs.map(
			item => `<img class='box__img' src='${item}'/>`
		);
		box.innerHTML = boxContent.join('');
		content.innerHTML = '';
		content.appendChild(box);
	}
};
