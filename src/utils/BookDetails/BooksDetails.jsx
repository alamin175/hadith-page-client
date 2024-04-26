import React from 'react'
import { GiBookshelf } from 'react-icons/gi'
import SeeMore from '../SeeMore'
import Link from 'next/link'

const BooksDetails = ({ books, chapters }) => {
	return (
		<div>
			{books.map(book => (
				<div key={book.id}>
					<div className="flex items-center p-2 px-4 gap-1 bg-gray-100 text-gray-500 text-sm rounded-t-xl">
						<GiBookshelf /> {'>'}{' '}
						<span>
							{book.book_name.charAt(0).toUpperCase() +
								book.book_name.slice(1)}
						</span>{' '}
					</div>
					<div className="m-4 ">
						<div className="flex justify-between mt-6 mb-4 items-center">
							<h1 className="font-bold">{book.title}</h1>
							<input
								type="text"
								name="search"
								placeholder="Search"
								className=" border-2 rounded-md p-1 h-8 w-44"
							/>
						</div>
						<div>
							<SeeMore description={book.book_descr} />
							<hr className="py-2 my-2" />
						</div>
						<div>
							{chapters.map(chapter => (
								<Link
									href={`/bukhari/${chapter.id}`}
									key={chapter.id}
									className="flex justify-between items-center border  p-4 rounded-xl hover:bg-emerald-100"
								>
									<div className="flex items-center gap-3">
										<p
											className="bg-emerald-600  p-2 px-3 rounded-3xl text-white"
											style={{
												clipPath:
													'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
											}}
										>
											{chapter.number}
										</p>
										<p>{chapter.title}</p>
									</div>
									<div>
										<p>{chapter.hadis_range}</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default BooksDetails
