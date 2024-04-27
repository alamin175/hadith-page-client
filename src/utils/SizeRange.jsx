'use client'

import { useState } from 'react'

const SizeRange = ({ rangeValue }) => {
	const intValue = (rangeValue / 2).toFixed(0)
	const [value, setValue] = useState(intValue)
	const updateValue = e => {
		setValue(e.target.value)
	}

	return (
		<div className="flex gap-3 items-center">
			<input
				type="range"
				id="vol"
				name="vol"
				min="0"
				max={rangeValue}
				onChange={updateValue}
				className="w-full h-1 bg-emerald-600  appearance-none"
			/>
			<p id="rangeValue">{value}</p>
		</div>
	)
}

export default SizeRange
