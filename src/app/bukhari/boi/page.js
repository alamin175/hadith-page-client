import BooksDetails from '@/utils/BookDetails/BooksDetails'

const BookChapterPage = async () => {
	const res = await fetch('http://localhost:5000/api/books', {
		cache: 'force-cache',
	})
	const books = await res.json()

	const response = await fetch('http://localhost:5000/api/chapter', {
		cache: 'force-cache',
	})
	const chapters = await response.json()
	// console.log(books)
	return (
		<div className=" bg-white rounded-t-xl">
			<BooksDetails books={books} chapters={chapters} />
		</div>
	)
}

export default BookChapterPage
