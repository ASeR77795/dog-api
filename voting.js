import { key } from './key.js';

const content = document.querySelector('.block__content');
const url = 'https://api.thecatapi.com/v1/images/search';
export const arr = [];

export const renderVoting = () => {
	const voting = `<h1>Voting</h1>`;
	content.innerHTML = voting;

	const downVote = async imgId => {
		try {
			await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': key.toString(),
				},
				body: JSON.stringify({
					image_id: imgId,
					sub_id: '5',
					value: -1,
				}),
			});
		} catch (error) {
			console.error(error);
		}
	};

	const upVote = async imgId => {
		try {
			await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': key.toString(),
				},
				body: JSON.stringify({
					image_id: imgId,
					sub_id: '5',
					value: 1,
				}),
			});
		} catch (error) {
			console.error(error);
		}
	};

	const addFavs = img => {
		arr.push(img);
		console.log(arr);
	};

	const handleButtonClick = event => {
		const btn = event.target.closest('.btn');

		if (!btn) return;

		if (btn.classList.contains('up')) {
			upVote(btn.getAttribute('data-id'));
			renderVoting();
		}
		if (btn.classList.contains('down')) {
			downVote(btn.getAttribute('data-id'));
			renderVoting();
		}
		if (btn.classList.contains('favs')) {
			addFavs(btn.getAttribute('data-favs'));
		}
	};

	fetch(url)
		.then(res => res.json())
		.then(data => {
			content.innerHTML = `
            <div class="img__box"><img  src=${data[0].url} /></div>
            <div class="btn__box">
                <button class="btn favs" type="button" data-favs='${data[0].url}'>
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 -0.5 17 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="si-glyph si-glyph-heart"
                    >
                        <title>930</title>
                        <defs></defs>
                        <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <path
                                d="M12.958,1.03 C11.045,1.03 9.447,2.378 9.047,4.178 C8.631,2.375 7.026,1.03 5.102,1.03 C2.865,1.03 1.052,2.854 1.052,5.102 C1.052,11.598 9.057,14.94 9.057,14.94 C9.057,14.94 16.969,11.682 16.969,5.061 C16.969,2.833 15.174,1.03 12.958,1.03 L12.958,1.03 Z"
                                fill="#434343"
                                class="si-glyph-fill"
                            ></path>
                        </g>
                    </svg>
                </button>
                <div>
                    <button class="btn up" data-id='${data[0].id}' >
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 -0.5 17 17"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            class="si-glyph si-glyph-like"
                        >
                            <title>863</title>
                            <defs></defs>
                            <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g
                                    transform="translate(1.000000, 1.000000)"
                                    fill="#434343"
                                >
                                    <path
                                        d="M3.811,12.958 L1.194,12.958 C0.562,12.958 0.048,12.456 0.048,11.836 L0.048,6.128 C0.048,5.508 0.563,5.005 1.194,5.005 L3.811,5.005 C4.445,5.005 4.959,5.508 4.959,6.128 L4.959,11.836 C4.959,12.456 4.444,12.958 3.811,12.958 L3.811,12.958 Z"
                                        class="si-glyph-fill"
                                    ></path>
                                    <path
                                        d="M13.938,9.949 L13.938,11.033 L15.452,11.033 C15.376,12.179 14.794,12.93 13.712,12.93 L9.286,12.93 C8.598,12.93 8.257,11.618 6.587,11.618 L6.029,11.637 L6.029,5.681 C6.029,5.681 7.092,5.515 7.448,4.39 C7.448,4.39 8.899,0.429 10.018,0.034 C10.676,0.034 11.209,-0.013 11.209,1.159 L10.614,2.973 C10.614,2.973 10.261,5.005 12.754,5.005 L14.899,5.005 C15.587,5.005 15.959,5.429 15.959,6.054 C15.959,6.054 15.973,6.411 15.966,6.95 L13.939,6.95 L13.939,8.034 L15.929,8.034 C15.894,8.634 15.827,9.3 15.711,9.95 L13.938,9.95 L13.938,9.949 Z"
                                        class="si-glyph-fill"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <button class="btn down" data-id='${data[0].id}'>
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 -0.5 17 17"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            class="si-glyph si-glyph-like-unlike"
                        >
                            <title>1141</title>
                            <defs></defs>
                            <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g
                                    transform="translate(1.000000, 2.000000)"
                                    fill="#434343"
                                >
                                    <path
                                        d="M3.811,0.035 L1.194,0.035 C0.562,0.035 0.048,0.537 0.048,1.158 L0.048,6.865 C0.048,7.486 0.563,7.988 1.194,7.988 L3.811,7.988 C4.445,7.988 4.959,7.486 4.959,6.865 L4.959,1.158 C4.959,0.537 4.444,0.035 3.811,0.035 L3.811,0.035 Z"
                                        class="si-glyph-fill"
                                    ></path>
                                    <path
                                        d="M13.938,3.045 L13.938,1.961 L15.452,1.961 C15.376,0.815 14.794,0.063 13.712,0.063 L9.286,0.063 C8.598,0.063 8.257,1.375 6.587,1.375 L6.029,1.357 L6.029,7.312 C6.029,7.312 7.092,7.478 7.448,8.603 C7.448,8.603 8.899,12.564 10.018,12.96 C10.676,12.96 11.209,13.007 11.209,11.835 L10.614,10.021 C10.614,10.021 10.261,7.988 12.754,7.988 L14.899,7.988 C15.587,7.988 15.959,7.564 15.959,6.939 C15.959,6.939 15.973,6.582 15.966,6.044 L13.939,6.044 L13.939,4.96 L15.929,4.96 C15.894,4.36 15.827,3.694 15.711,3.044 L13.938,3.044 L13.938,3.045 Z"
                                        class="si-glyph-fill"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>`;
			const upVoteButtons = document.querySelectorAll('.btn.up');
			const downVoteButtons = document.querySelectorAll('.btn.down');
			const favsButtons = document.querySelectorAll('.btn.favs');

			upVoteButtons.forEach(button => {
				button.addEventListener('click', handleButtonClick);
			});

			downVoteButtons.forEach(button => {
				button.addEventListener('click', handleButtonClick);
			});

			favsButtons.forEach(button => {
				button.addEventListener('click', handleButtonClick);
			});
		})
		.catch(err => console.log(err));
};
