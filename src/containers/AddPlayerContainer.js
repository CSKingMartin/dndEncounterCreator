import { connect } from 'react-redux';
import { addPlayer } from '@Actions';
import AddPlayer from '@Components/AddPlayer.jsx';


// const openCloseModule = () => {
  
// }

const mapDispatchToProps = (dispatch) => {
  return {
    newPlayer: (name, ac, hp) => {
      //error statements
      if(!name || typeof name != 'string') {
        console.log('Error! Bad/No name!');
      } else if(!ac || typeof ac != 'number') {
        console.log('Error! Bad/No AC');
      } else if(!hp|| typeof hp != 'number') {
        console.log('Error! Bad/No HP');
      }
      const player = {
        'name': name,
        'ac': ac,
        'hp': hp
      }
      dispatch(addPlayer(player));
    }
  }
}


const AddPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(AddPlayer)

export default AddPlayerContainer;