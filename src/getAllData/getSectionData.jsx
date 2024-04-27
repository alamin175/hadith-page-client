export const getSection = async () => {
	const res = await fetch('https://hadith-page-server.onrender.com/section', {
		cache: 'force-cache',
	})
	return res.json()
}
