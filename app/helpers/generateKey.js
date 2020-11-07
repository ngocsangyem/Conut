const generateKey = function (length) {
	const chars = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'];
	// and then just do:
	return [...Array(length)].map(
		(i) => chars[(Math.random() * chars.length) | 0]
	).join``;
};

module.exports = generateKey;
