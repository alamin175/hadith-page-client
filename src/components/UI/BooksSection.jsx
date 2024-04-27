import { getBooks } from '@/getAllData/getBooksData'
import { getChapterData } from '@/getAllData/getChapterData'
import TabComponent from '@/utils/TabComponent/Tab'
import React from 'react'

const BooksSection = async () => {
	const chapters = await getChapterData()
	const books = await getBooks()

	return (
		<div>
			<div className="mx-auto rounded-xl ">
				<TabComponent chapters={chapters} books={books} />

				{/* <div className=" flex m-4 justify-center mx-auto">
					<input
						type="text"
						name="search"
						placeholder="Search"
						className="border-2 rounded-md p-1 h-8 w-44"
					/>
				</div> */}
			</div>
			{/* <div className="bg-emerald-100 m-2 p-4 rounded-xl">
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
								<p className="text-[10px] font-semibold">
									{value.title}
								</p>
								<p className="text-[8px] text-gray-500 mt-1">
									হাদিসের রেঞ্জ :{''} {value.hadis_range}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div> */}

			{/* <Books /> */}
		</div>
	)
}

export default BooksSection
