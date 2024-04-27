import { getBooks } from '@/getAllData/getBooksData'
import { getChapterData } from '@/getAllData/getChapterData'
import BooksDetails from '@/utils/BookDetails/BooksDetails'

const BookChapterPage = async () => {
	const books = await getBooks()
	const chapters = await getChapterData()

	return (
		<div className="bg-white h-screen">
			<BooksDetails books={books} chapters={chapters} />
		</div>
	)
}

export default BookChapterPage
