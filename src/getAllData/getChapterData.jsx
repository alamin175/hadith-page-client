export const getBooks = async () => {
	const res = await fetch('http://localhost:5000/api/chapter')
	return res.json()
}
