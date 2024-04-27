export const getBooks = async () => {
	const res = await fetch('http://localhost:5000/api/books')
	// const res = await fetch(`http://localhost:5000/api/books/${bookId}`)
	return res.json()
}
export const getSingleBook = async bookId => {
	// const res = await fetch('http://localhost:5000/api/books')
	const res = await fetch(`http://localhost:5000/api/books/${bookId}`)
	return res.json()
}
