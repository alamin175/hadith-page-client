export const getSection = async () => {
	// const res = await fetch('http://localhost:5000/api/books')
	const res = await fetch('http://localhost:5000/api/section', {
		cache: 'force-cache',
	})
	return res.json()
}
