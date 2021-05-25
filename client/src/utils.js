export const assurePositiveInteger = value => {
	if (typeof value !== 'number' || isNaN(value) || value < 1) {
		throw new TypeError(`Value must be a positive integer. Got: ${value}`);
	}
};

export const assureInRange = (value, range = []) => {
	if (!range.includes(value)) {
		throw new RangeError(`Value out of range. Accepted: ${JSON.stringify(range)}`);
	}
};

export const decodeHtmlSpecialChars = value => {
	const text = document.createElement('textarea');
	text.innerHTML = value;
	return text.value;
};
