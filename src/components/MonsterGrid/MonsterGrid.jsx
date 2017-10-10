import MonsterCard from '@Tags/MonsterCard/MonsterCard.jsx';

const MonsterGrid = (props) => {
	return (
		<div className="MonsterGrid">
			<input className="MonsterGrid__search" placeholder="Search..." type='text' onChange={props.filterCB} />
			{props.data.map((data, index) => {
				return <MonsterCard key={index} data={data} cb={props.addCB} />
			})}
		</div>
	)
}

module.exports = MonsterGrid;