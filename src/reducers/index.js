import {
	ADD_MONSTER,
	REMOVE_MONSTER,
	ADD_PLAYER,
	REMOVE_PLAYER,
	UPDATE_FILTER
} from '../actions';

import monsters from '../monsters.json';

const initialState = {
	combatants: {
		monsters: [],
		players: []
	},
	monsterGrid: {
		data: monsters,
		filter: ''
	}
}

//adding or removing monsters from the combatants list
const addRemoveMonsters = (state, action) => {
	switch(action.type) {
		case ADD_MONSTER:
			return {
				...state,
					monsters: [
						...state.monsters,
						action.monster
					]
				}
		case REMOVE_MONSTER:
			return {...state, 
				monsters: state.monsters.slice(0, action.index).concat(state.monsters.slice(action.index +1))
			}
		default:
			return state
	}
}

//adding or removing players from the combatants list
const addRemovePlayers = (state, action) => {

}

//updates when query is typed in the search field
const updateSearchFilter = (state, action) => {
	let newState = {
		data: [],
		filter: action.filter
	}

	let target = action.filter.toUpperCase();

	monsters.map((monster, index) => {
		let monsterName = monster.name.toUpperCase();

		if (monsterName.indexOf(target) === -1) {
			return;
		} else {
			newState.data.push(monster);
		}
	});

	return newState;
}

//deals with combatants list ONLY
const combatantsApp = (state = initialState, action) => {
	console.log('Action: ', action);
	switch(action.type) {
		case ADD_MONSTER:
		case REMOVE_MONSTER:
			return {...state, 
				combatants: addRemoveMonsters(state.combatants, action)}
		case ADD_PLAYER: 
			console.log('add player');
		case UPDATE_FILTER: {
			return {...state,
				monsterGrid: updateSearchFilter(state.monsterGrid, action)
			}
		}
		default:
			return state
	}
	console.log(state);
}

export default combatantsApp;

/*
	state example
	{
		combatants: {
			monsters: [
				{
					name: 'Goblin',
					...
				},
				{
					name: 'Bugbear',
					...
				}
			],
			players: [
				{
					name: 'Kithri',
					ac: 19,
					...
				},
				{
					name: Bralgir,
					ac: 18,
					...
				}
			],
			totalCR: ''
		},
		monsterGrid: {
			allData: [],
			filteredData: []
			filter: ''
		}
	}
*/