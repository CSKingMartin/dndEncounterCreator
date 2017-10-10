import RosterContainer from '@Containers/RosterContainer.js';
import AddButtonSetContainer from '@Containers/AddButtonSetContainer.js';
import MonsterGridContainer from '@Containers/MonsterGridContainer.js';

const EncounterCreator = () => {
	return (
		<div className="EncounterCreator">
			<RosterContainer />
			<MonsterGridContainer />
		</div>
	)
}

export default EncounterCreator;