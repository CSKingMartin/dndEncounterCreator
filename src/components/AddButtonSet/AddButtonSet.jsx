import Button from '@Tags/Button/Button.jsx';

const AddButtonSet = (props) => {
	return (
		<div className="AddButtonSet">
			<Button text={"Add Goblin"} onClick={() => props.cb('Goblin')}/>
			<Button text={"Add BugBear"} onClick={() => props.cb('BugBear')} />
		</div>
	)
}

module.exports = AddButtonSet;