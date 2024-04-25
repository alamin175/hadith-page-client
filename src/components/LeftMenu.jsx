import { FaBookOpen, FaBookmark, FaHome, FaLocationArrow } from 'react-icons/fa'
import { GiBookshelf } from 'react-icons/gi'
import { MdOutlineWidgets } from 'react-icons/md'
const LeftMenu = () => {
	return (
		<div>
			<div className="flex flex-col gap-7 text-xl m-4 mt-28  ">
				<FaHome />
				<GiBookshelf />
				<FaBookOpen />
				<FaBookmark />
				<MdOutlineWidgets />
				<FaLocationArrow />
			</div>
		</div>
	)
}

export default LeftMenu
