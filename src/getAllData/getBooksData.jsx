export const getBooks = async () => {
	const res = await fetch('http://localhost:5000/api/books', {
		cache: 'force-cache',
	})
	return res.json()
}
export const getSingleBook = async bookId => {
	const res = await fetch(`http://localhost:5000/api/books/${bookId}`, {
		cache: 'no-cache',
	})
	return res.json()
}
