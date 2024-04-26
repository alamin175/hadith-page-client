import { getHadis } from '@/getAllData/getHadisData'
import { GiBookshelf } from 'react-icons/gi'
import { FaRegBookmark, FaRegCopy } from 'react-icons/fa'
import { CiSettings, CiShare1, CiShare2 } from 'react-icons/ci'
import { MdOutlineReport } from 'react-icons/md'

const HadisSection = async ({ id }) => {
	const hadithDetails = await getHadis()

	// console.log(hadithDetails)
	return (
		<div>
			<div className="flex items-center p-2 px-4 gap-1 bg-gray-100 text-gray-500 text-sm rounded-t-xl">
				<GiBookshelf /> {'>'} <span>Bukhari</span> {'>'} <span>1</span>
			</div>
			{hadithDetails.map(hadith => (
				<div
					key={hadith.hadith_id}
					className=" bg-white rounded-xl p-4 my-3"
				>
					<div>
						<p className="flex my-2 items-center gap-2 text-xl text-emerald-600">
							<CiSettings />{' '}
							<span className="text-sm">{hadith.hadith_id}</span>
						</p>
						<p>{hadith.ar}</p>
						<p className="my-3  text-[12px] text-emerald-600">
							{hadith.narrator} থেকে বর্ণিত :
						</p>
						<p className="text-[14px] leading-loose mb-8 font-medium">
							{hadith.bn}
						</p>
					</div>
					<div className="flex justify-between">
						<div>
							<p className="text-[10px] font-bold">
								হাদিসের মান :{' '}
								<span className="bg-[#46B891] p-[6px] rounded-md text-white font-bold text-[8px]">
									{hadith.grade}
								</span>
							</p>
						</div>
						<div className="flex gap-7 text-gray-500">
							<button className=" tooltip" data-tip="কপি">
								<FaRegCopy />
							</button>
							<button className="tooltip" data-tip="বুকমার্ক ">
								<FaRegBookmark />
							</button>
							<button className="tooltip" data-tip="শেয়ার">
								<CiShare2 />
							</button>
							<button className="tooltip" data-tip="রিপোর্ট">
								<MdOutlineReport />
							</button>
							<button className="tooltip" data-tip="ডিরেক্ট">
								<CiShare1 />
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default HadisSection
