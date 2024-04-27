export const getChapterData = async () => {
	const res = await fetch('http://localhost:5000/api/chapter', {
		cache: 'force-cache',
	})
	return res.json()
}

export const getChapter = async bookId => {
	const res = await fetch(`http://localhost:5000/api/chapter/${bookId}`, {
		cache: 'no-cache',
	})
	return res.json()
}
