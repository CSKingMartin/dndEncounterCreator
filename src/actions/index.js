// Action Types
export const ADD_MONSTER = 'ADD_MONSTER';
export const REMOVE_MONSTER = 'REMOVE_MONSTER';
export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_FILTER = 'UPDATE_FILTER';

// Action Creators
export function addMonster(monster) {
	//returns a Javascript Object
	return { type: ADD_MONSTER, monster }
}

export function removeMonster(index) {
	return { type: REMOVE_MONSTER, index }
}

export function addPlayer(player) {
	return { type: ADD_PLAYER, player }
}

export function removePlayer(index) {
	return { type: REMOVE_PLAYER, index }
}

export function updateFilter(filter) {
	return { type: UPDATE_FILTER, filter }
}
