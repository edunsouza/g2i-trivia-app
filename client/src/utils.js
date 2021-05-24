const assurePositiveInteger = value => {
	if (typeof value !== 'number' || isNaN(value) || value < 1) {
		throw new TypeError(`Value must be a positive integer. Got: ${value}`);
	}
};

const assureInRange = (value, range = []) => {
	if (!range.includes(value)) {
		throw new RangeError(`Value out of range. Accepted: ${JSON.stringify(range)}`);
	}
};

export default {
	assure: {
		positiveInteger: assurePositiveInteger,
		inRange: assureInRange
	}
};
