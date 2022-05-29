function ColorBox({ color, setColor }) {
	return (
		<div>
			<input
				id='box'
				value={color}
				placeholder='Empty value'
				onChange={(e) => setColor(e.target.value)}
				disabled

				style={{ backgroundColor: `${color}`}}

			/>
		</div>
	)
}

export default ColorBox;