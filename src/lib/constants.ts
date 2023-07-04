const KEYBOARD_ROWS_ARR = [
	['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P'],
	['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['ENTER', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
];
Object.freeze(KEYBOARD_ROWS_ARR);

const MAX_LETTERS = 5;
const MAX_GUESSES = 6;

const ID_NAME = 'user_id';

export default {
	KEYBOARD_ROWS_ARR,
	MAX_LETTERS,
	MAX_GUESSES,
	ID_NAME
};
