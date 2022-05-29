function AddColorBar({ setColor }) {
	return (
		<div>
			<input
				id='colorBar'
				type='text'
				role='searchbox'
				placeholder='Add Color Name'
				onChange={(e) => setColor(e.target.value)}
			/>
		</div>
	)
}

export default AddColorBar;