import { GiBookshelf } from 'react-icons/gi'
const HadisSection = async ({ params }) => {
	const res = await fetch('http://localhost:5000/api/hadith')
	const hadithDetails = await res.json()
	return (
		<div>
			<div className="flex items-center p-2 px-4 gap-1 bg-gray-100 text-gray-500 text-sm rounded-t-xl">
				<GiBookshelf /> {'>'} <span>Bukhari</span> {'>'} <span>1</span>
			</div>
			{hadithDetails.map(hadith => (
				<div key={hadith.hadith_id}>
					<div></div>
				</div>
			))}
		</div>
	)
}

export default HadisSection
