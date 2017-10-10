import { connect } from 'react-redux';
import AddButtonSet from '@Components/AddButtonSet/AddButtonSet.jsx';
import { addMonster } from '@Actions';

// Placeholder Data
const data = {
	'Goblin': {
		'name': 'Goblin',
		'ac': 15,
		'hp': 7
	},
	'Bugbear': {
		'name': 'BugBear',
		'ac': 16,
		'hp': 27
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    cb: (monster) => {
			for(let i in data) {
				if(monster === data[i].name) {
		      dispatch(addMonster(data[i]));
				}
			}
    }
  }
}


const AddButtonSetContainer = connect(null, mapDispatchToProps)(AddButtonSet)

export default AddButtonSetContainer;