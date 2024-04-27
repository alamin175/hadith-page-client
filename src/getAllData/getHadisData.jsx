export const getHadis = async () => {
	const res = await fetch('http://localhost:5000/api/hadith', {
		cache: 'force-cache',
	})
	return res.json()
}
export const getSingleHadis = async id => {
	const res = await fetch(`http://localhost:5000/api/hadith/${id}`, {
		cache: 'no-cache',
	})
	return res.json()
}
