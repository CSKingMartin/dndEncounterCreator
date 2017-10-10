import { connect } from 'react-redux';
import { removeMonster, addPlayer } from '@Actions';
import Roster from '@Components/Roster/Roster.jsx';

const mapNewPlayer = (name, ac, hp) => {
	const newPlayer = {
		'name': name,
		'ac': ac,
		'hp': hp
	}
	dispatch(addPlayer(newPlayer));
}

const mapStateToProps = state => {
	return {
		combatants: state.combatants.monsters
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    cb: (id) => {
    	dispatch(removeMonster(id))
    }
  }
}

const RosterContainer = connect(mapStateToProps, mapDispatchToProps)(Roster)

export default RosterContainer;