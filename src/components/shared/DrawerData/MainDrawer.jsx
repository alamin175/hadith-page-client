import { getBooks } from '@/getAllData/getBooksData'
import { getChapterData } from '@/getAllData/getChapterData'
import TabComponent from '@/utils/TabComponent/Tab'
import { IoMenu } from 'react-icons/io5'

const MainDrawer = async () => {
	const chapters = await getChapterData()
	const books = await getBooks()
	return (
		<div>
			<div className="drawer">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					{/* Page content */}
					<label htmlFor="my-drawer" className=" drawer-button">
						<IoMenu />
					</label>
				</div>
				<div className="drawer-side w-full">
					<label
						htmlFor="my-drawer"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					{/* Sidebar content */}

					<div className="min-h-full bg-white">
						<TabComponent books={books} chapters={chapters} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainDrawer
