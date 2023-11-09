'use strict';

function createHash(key, secret) {
	const hash = btoa(key + secret);
	return hash;
}

const secret = 'mySecretKey';

while (true) {
	const userKey = prompt('Enter a key or press cancel to exit:');

	if (userKey === null) {
		break;
	}

	const hash = createHash(userKey, secret);
	alert(`Hash for key "${userKey}": ${hash}`);
}
