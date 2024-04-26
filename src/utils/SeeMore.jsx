'use client'
import { useState } from 'react'

const SeeMore = ({ description }) => {
	const [showAll, setShowAll] = useState(false)
	const toggleDescription = () => {
		setShowAll(!showAll)
	}
	return (
		<div>
			<p className=" pt-4 text-[10px]">
				{showAll ? description : description.slice(0, 200) + '...'}
				{description.length > 200
					? description.slice(0, 200) + description && (
							<button
								className="text-emerald-600 ml-1"
								onClick={toggleDescription}
							>
								{' '}
								{showAll ? 'লুকান' : 'আরও দেখুন'}
							</button>
					  )
					: description}
			</p>
		</div>
	)
}

export default SeeMore
