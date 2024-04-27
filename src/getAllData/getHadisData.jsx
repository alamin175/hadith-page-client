export const getHadis = async () => {
	const res = await fetch('https://hadith-page-server.onrender.com/hadith', {
		cache: 'force-cache',
	})
	return res.json()
}
export const getSingleHadis = async id => {
	const res = await fetch(
		`https://hadith-page-server.onrender.com/hadith/${id}`,
		{
			cache: 'no-cache',
		}
	)
	return res.json()
}
