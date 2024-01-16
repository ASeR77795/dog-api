import { arr } from './voting.js';

const content = document.querySelector('.block__content');

export const renderFavs = () => {
	let uniqueArray = [];
	if (arr.length !== 0) {
		uniqueArray = arr.filter(
			(value, index, self) => self.indexOf(value) === index
		);
	}

	const favs = `<h1>Nothing in favs</h1>`;
	content.innerHTML = favs;
	let storedFavs = JSON.parse(localStorage.getItem('favorite')) || [];
	const combinedArr = storedFavs.concat(uniqueArray);
	localStorage.setItem('favorite', JSON.stringify(combinedArr));
	if (combinedArr && combinedArr.length !== 0) {
		const box = document.createElement('div');
		box.classList.add('box');

		const boxContent = combinedArr.map(
			item => `<img class='box__img' src='${item}'/>`
		);
		box.innerHTML = boxContent.join('');
		content.innerHTML = '';
		content.appendChild(box);
	}
};
