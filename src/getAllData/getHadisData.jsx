export const getHadis = async () => {
	const res = await fetch('http://localhost:5000/api/hadith')
	return res.json()
}
