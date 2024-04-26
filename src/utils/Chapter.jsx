import Link from 'next/link'
import React from 'react'

const Chapter = async () => {
	const res = await fetch('http://localhost:5000/api/chapter', {
		cache: 'force-cache',
	})
	const data = await res.json()
	return (
		<div className="bg-emerald-100 m-2 p-4 rounded-xl">
			{data.map(value => (
				<Link href={`/bukhari/${value.id}`} key={value.id}>
					<div className="flex items-center -ml-2">
						<p
							className="bg-emerald-400  p-2 px-3 rounded-3xl"
							style={{
								clipPath:
									'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
							}}
						>
							{value.number}
						</p>
						<div className="ml-3">
							<p className="text-[10px] font-semibold">{value.title}</p>
							<p className="text-[8px] text-gray-500 mt-1">
								হাদিসের রেঞ্জ :{''} {value.hadis_range}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Chapter
