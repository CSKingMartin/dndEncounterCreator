# Reducers
Reducers are functions that take the current state and an action, and return a new state.

# Example of State structure:
```
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
```
