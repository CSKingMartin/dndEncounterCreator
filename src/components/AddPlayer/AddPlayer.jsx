import Button from '@Tags/Button/Button.jsx';

const AddPlayer = (props) => {

	return(
		<div className="AddPlayer">
			<div className="AddPlayer__tab" onClick={props.openCB}>
				<p>Add a Player</p>
			</div>

			<div className="AddPlayer__form">
				<p>Name:</p>
				<input />
				<p>HP:</p>
				<input />
				<p>AC:</p>
				<input />
				<Button text="Add" onClick={props.addCB}/>
			</div>
		</div>
	)
}

module.exports = AddPlayer;