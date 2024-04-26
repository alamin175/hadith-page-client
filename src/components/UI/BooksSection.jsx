import Books from '@/utils/BookDetails/Books'
import TabComponent from '@/utils/TabComponent/Tab'
import Link from 'next/link'
import React from 'react'

const BooksSection = async () => {
	const res = await fetch('http://localhost:5000/api/chapter', {
		cache: 'force-cache',
	})
	const chapters = await res.json()
	const response = await fetch('http://localhost:5000/api/books', {
		cache: 'force-cache',
	})
	const books = await response.json()

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

			<Books />
		</div>
	)
}

export default BooksSection
