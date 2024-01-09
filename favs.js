const content = document.querySelector('.block__content');

export const renderFavs = () => {
	const favs = `<h1>Favs</h1>`;
	content.innerHTML = favs;
};
