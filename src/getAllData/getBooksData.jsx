export const getBooks = async () => {
	const res = await fetch('https://hadith-page-server.onrender.com/books', {
		cache: 'force-cache',
	})
	return res.json()
}
export const getSingleBook = async bookId => {
	const res = await fetch(
		`https://hadith-page-server.onrender.com/books/${bookId}`,
		{
			cache: 'no-cache',
		}
	)
	return res.json()
}
