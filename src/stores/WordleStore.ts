import CONSTANTS from '$lib/constants';
import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import Rand from 'rand-seed';

export const correctWord = writable('BINGO');
export const currentRowIndex = writable(0);
export const currentColIndex = writable(0);
const userID = writable();

export const initGame = () => {
	console.log('init');

	const loadedUserId = loadUserId();
	if (!loadedUserId) {
		setAndSaveNewUser(uuidv4());
		return;
	}

	let yourDate = new Date();
	const offset = yourDate.getTimezoneOffset();
	yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
	console.log(yourDate.toISOString().split('T')[0]);
	console.log(new Rand(yourDate.toISOString().split('T')[0]).next());

	console.log('user exists');
};

const loadUserId = () => {
	return localStorage.getItem(CONSTANTS.ID_NAME);
};

const setAndSaveNewUser = (uuid: string) => {
	localStorage.setItem(CONSTANTS.ID_NAME, uuid);
	userID.set(uuid);
};
