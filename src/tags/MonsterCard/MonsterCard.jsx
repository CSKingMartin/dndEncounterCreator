import Button from '@Tags/Button/Button.jsx';

const MonsterCard = (props) => {
	return (
		<div className="MonsterCard">
			<h3 className="MonsterCard__name">
				{props.data.name}
			</h3>
			<div className="MonsterCard__stat">
				<h3>CR:</h3>
				<p>{props.data.challenge_rating}</p>
			</div>
			<Button text={"Add " + props.data.name} onClick={() => props.cb(props.data.name)} />
		</div>
	)
}

module.exports = MonsterCard;