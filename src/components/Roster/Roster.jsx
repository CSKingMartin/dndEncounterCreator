import Combatant from '@Tags/Combatant/Combatant.jsx';
import AddPlayer from '@Components/AddPlayer/AddPlayer.jsx';

const Roster = (props) => {	
	const body = (combatants) => {
		if(!combatants[0]) {
			return (
				<div className="Roster__body">
					<p>No monsters!</p>
				</div>
			)
		} else {
			return (
				<div className="Roster__body">
				{props.combatants.map((monster, id) => {
					return(
						<Combatant 
							key= {id}
							index= {monster.index}
							name = {monster.name}
							ac = {monster.armor_class}
							hp = {monster.hit_points}
							cb = {() => props.cb(id)}
						/>
					)})}
				</div>
			)
		}
	}
	
	return (
		<div className="Roster">
			{body(props.combatants)}
			<AddPlayer addCB={() => props.newPlayer()} />
		</div>
	)
}

module.exports = Roster;

