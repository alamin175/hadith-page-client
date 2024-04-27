import { getBooks } from '@/getAllData/getBooksData'
import { getChapterData } from '@/getAllData/getChapterData'
import TabComponent from '@/utils/TabComponent/Tab'

const BooksSection = async () => {
	const chapters = await getChapterData()
	const books = await getBooks()

	return (
		<div className=" h-screen">
			<div className="mx-auto rounded-xl bg-white h-5/6 ">
				<TabComponent chapters={chapters} books={books} />
			</div>
		</div>
	)
}

export default BooksSection
