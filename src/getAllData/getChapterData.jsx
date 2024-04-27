export const getChapter = async bookId => {
	// const res = await fetch('http://localhost:5000/api/chapter')
	const res = await fetch(`http://localhost:5000/api/chapter/${bookId}`)
	return res.json()
}
