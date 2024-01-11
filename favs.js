import { arr } from './voting.js';

const content = document.querySelector('.block__content');

export const renderFavs = () => {
	const uniqueArray = arr.filter(
		(value, index, self) => self.indexOf(value) === index
	);
	console.log(uniqueArray);

	const favs = `<h1>Favs</h1>`;
	content.innerHTML = favs;

	const box = document.createElement('div');
	box.classList.add('box');

	const boxContent = uniqueArray.map(item => {
		return `<img class='box__img' src='${item}'/>`;
	});

	box.innerHTML = boxContent.join('');

	content.appendChild(box);
};
