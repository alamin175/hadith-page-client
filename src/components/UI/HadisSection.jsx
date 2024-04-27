import { getHadis } from '@/getAllData/getHadisData'
import { GiBookshelf } from 'react-icons/gi'
import { FaRegBookmark, FaRegCopy } from 'react-icons/fa'
import { CiSettings, CiShare1, CiShare2 } from 'react-icons/ci'
import { MdOutlineReport } from 'react-icons/md'
import { getChapter } from '@/getAllData/getChapterData'
import { getSingleBook } from '@/getAllData/getBooksData'
import { getSection } from '@/getAllData/getSectionData'
import { IoBookOutline } from 'react-icons/io5'

const HadisSection = async ({ id }) => {
	const hadithDetails = await getHadis()
	const chapters = await getChapter(id)
	const book = await getSingleBook(id)
	const section = await getSection()

	const filterSectionByBookId = (data, bookId) => {
		return data.filter(item => item.book_id == bookId)
	}

	const sectionData = filterSectionByBookId(section, id)

	return (
		<div>
			<div className="flex items-center p-2 px-4 gap-1 bg-gray-100 text-gray-500 text-sm rounded-t-xl">
				<GiBookshelf /> {'>'} <span>Bukhari</span> {'>'} <span>1</span>
			</div>

			{/* Book Data */}

			<div className="bg-white flex items-center justify-between p-4 rounded-b-xl">
				<div className="flex items-center gap-4">
					<GiBookshelf className="-rotate-90 text-3xl text-emerald-500" />
					<div>
						<p>{book.title}</p>
						<p className="text-[9px] mt-1">
							সর্বমোট হাদিস - {book.number_of_hadis}
						</p>
					</div>
				</div>
				<div>
					<p className="font-semibold">{book.title_ar}</p>
				</div>
			</div>

			{/* Chapter Data */}

			<div className="bg-white flex items-center gap-3 p-3 my-4 rounded-xl">
				<p className="bg-emerald-600 text-white p-2 px-4 text-sm rounded-xl ">
					{chapters.id}
				</p>
				<p>{chapters.title}</p>
			</div>

			{/* Hadis data */}

			{hadithDetails.map((hadith, index) => (
				<div key={hadith.hadith_id}>
					{sectionData[index] && (
						<div className="bg-white rounded-xl p-4 my-3">
							<div className="flex items-center gap-2">
								<p className="text-emerald-600 text-xl font-bold">
									<IoBookOutline />
								</p>
								<p className="text-[10px] font-semibold">
									{sectionData[index].number}
								</p>
							</div>
							<div>
								<p className="my-4 font-medium leading-relaxed">
									{sectionData[index].title}
								</p>
								{sectionData[index].preface && <hr />}
								<p className="mt-5 text-sm leading-loose">
									{sectionData[index].preface}
								</p>
							</div>
						</div>
					)}
					<div className="bg-white rounded-xl p-4 my-3">
						<div>
							<p className="flex my-2 items-center gap-2 text-xl text-emerald-600">
								<CiSettings />
								<span className="text-sm">{hadith.hadith_id}</span>
							</p>
							<p>{hadith.ar}</p>
							<p className="my-4 font-bold mt-8 text-[12px] text-emerald-600">
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
								<button className="tooltip" data-tip="কপি">
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
				</div>
			))}
		</div>
	)
}

export default HadisSection
