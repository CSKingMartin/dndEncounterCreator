import Button from '../Button/Button.jsx';

const Combatant = (props) => {
	return (
		<div className="Combatant">
			<div className="Combatant__info">
			<h3 className="Combatant__info__name">{props.name}</h3>
			<div className="Combatant__info__statBlock">
				<h4>AC:</h4>
				<p>{props.ac}</p>
			</div>
			<div className="Combatant__info__statBlock">
				<h4>HP:</h4>
				<p>{props.hp}</p>
				</div>
			</div>
			<Button text={"Remove " + props.name} onClick={() => props.cb(props.id)} />
		</div>
	);
}

module.exports = Combatant;

