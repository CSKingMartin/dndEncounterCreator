import { connect } from 'react-redux';
import { addMonster, updateFilter } from '@Actions';
import MonsterGrid from '@Components/MonsterGrid/MonsterGrid.jsx';

import data from '../monsters.json';

const mapStateToProps = (state) => {
	return {
		data: state.monsterGrid.data
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCB: (monster) => {
			for(let i in data) {
				if(monster === data[i].name) {
		      dispatch(addMonster(data[i]));
				}
			}
    },
    filterCB: (filter) => {
    	dispatch(updateFilter(filter.target.value))
    }
  }
}

const MonsterGridContainer = connect(mapStateToProps, mapDispatchToProps)(MonsterGrid)

export default MonsterGridContainer;