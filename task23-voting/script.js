'use strict';

const emojis = ['👍', '👎', '😂', '😎', '😍'];
const voteCounters = {};

function renderVotingApp() {
	const votingApp = document.getElementById('votingApp');

	while (votingApp.firstChild) {
		votingApp.removeChild(votingApp.firstChild);
	}

	const emojiContainer = document.createElement('div');
	emojiContainer.style.display = 'flex';
	emojiContainer.style.justifyContent = 'space-around';
	emojiContainer.style.alignItems = 'center';
	emojiContainer.style.marginTop = '50px';

	emojis.forEach((emoji, index) => {
		const emojiElement = document.createElement('div');
		emojiElement.classList.add('emoji', 'btn', 'btn-light');
		emojiElement.textContent = emoji;

		const counterElement = document.createElement('div');
		counterElement.classList.add('counter');
		counterElement.textContent = voteCounters[index] || 0;

		emojiElement.addEventListener('click', () => {
			voteCounters[index] = (voteCounters[index] || 0) + 1;
			counterElement.textContent = voteCounters[index];
		});

		const emojiWrapper = document.createElement('div');
		emojiWrapper.appendChild(emojiElement);
		emojiWrapper.appendChild(counterElement);

		emojiContainer.appendChild(emojiWrapper);
	});

	votingApp.appendChild(emojiContainer);
}

renderVotingApp();
