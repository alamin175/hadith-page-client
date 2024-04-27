'use client'
import { useEffect, useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { IoMenu } from 'react-icons/io5'
import TabComponent from '@/utils/TabComponent/Tab'

const MainDrawer = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [books, setBooks] = useState([])
	const [chapters, setChapters] = useState([])
	// console.log(chapters)
	useEffect(() => {
		fetch('https://hadith-page-server.onrender.com/books')
			.then(res => res.json())
			.then(data => setBooks(data))

		fetch('https://hadith-page-server.onrender.com/chapter')
			.then(res => res.json())
			.then(data => setChapters(data))
	}, [])

	const toggleDrawer = () => {
		setIsOpen(prevState => !prevState)
	}

	return (
		<div>
			<button onClick={toggleDrawer} className="text-2xl">
				<IoMenu />
			</button>
			<Drawer
				open={isOpen}
				onClose={toggleDrawer}
				direction="left"
				className="bla bla bla"
			>
				<div className="flex justify-between items-center p-3">
					<p>ক্যাটাগরি</p>
					<button onClick={toggleDrawer} className="text-2xl">
						x
					</button>
				</div>
				<TabComponent chapters={chapters} books={books} />
			</Drawer>
		</div>
	)
}

export default MainDrawer
