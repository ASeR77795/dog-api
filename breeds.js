export const renderBreeds = () => {
	const url = 'https://api.thecatapi.com/v1/breeds';
	const content = document.querySelector('.block__content');

	fetch(url)
		.then(res => res.json())
		.then(data => {
			select(data);
		});

	const select = breeds => {
		let selectHTML = `
            <select class="form-select" aria-label="Default select example" id="breedsSelect">
            <option value="" selected>Choose</option>
            ${breeds
							.map(item => `<option value="${item.id}">${item.name}</option>`)
							.join('')}
        </select>
        <div id="breedsImages" class="breedsImages"></div>`;
		content.innerHTML = selectHTML;
		document
			.getElementById('breedsSelect')
			.addEventListener('change', handleSelectChange);
	};

	const handleSelectChange = () => {
		const selectedValue = document.getElementById('breedsSelect').value;
		if (selectedValue) {
			const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedValue}`;
			fetch(url)
				.then(res => res.json())
				.then(data => {
					const imagesHTML = data
						.map(
							item =>
								`<img src='${item.url}' alt='Breed' style='object-fit: cover;
                                width: 100%; height: 100%' />`
						)
						.join('');
					document.getElementById('breedsImages').innerHTML = imagesHTML;
				});
		}
	};
};
