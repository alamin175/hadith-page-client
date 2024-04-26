import { getBooks } from '@/getAllData/getBooksData'
import Link from 'next/link'

const Books = async () => {
	const books = await getBooks()
	// console.log(data)
	return (
		<div className="bg-emerald-100 m-2 p-4 rounded-xl">
			{books.map(book => (
				<Link href="/bukhari" key={book.id}>
					<div className="flex items-center -ml-2">
						<p
							className="bg-emerald-400  p-2 px-3 rounded-3xl"
							style={{
								clipPath:
									'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
							}}
						>
							{book.abvr_code}
						</p>
						<div className="ml-3">
							<p className="text-[10px] font-semibold">{book.title}</p>
							<p className="text-[8px] text-gray-500 mt-1">
								সর্বমোট হাদিস :{''} {book.number_of_hadis}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Books
