export const getChapterData = async () => {
	const res = await fetch('https://hadith-page-server.onrender.com/chapter', {
		cache: 'force-cache',
	})
	return res.json()
}

export const getChapter = async bookId => {
	const res = await fetch(
		`https://hadith-page-server.onrender.com/chapter/${bookId}`,
		{
			cache: 'no-cache',
		}
	)
	return res.json()
}
