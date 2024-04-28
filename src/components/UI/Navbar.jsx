import Image from 'next/image'
import homeIcon from '@/assets/images/home-logo.png'
import { FaHandHoldingHeart, FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import SettingsDrawer from '../shared/DrawerData/SettingsDrawer'

const Navbar = () => {
	return (
		<div className="p-2 px-4 h-10  ">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<Link href="/">
						<Image
							src={homeIcon}
							alt="Home Icon"
							width={30}
							height={10}
						/>
					</Link>
					<div className="ml-4">
						<h1 className="font-extrabold text-[10px] md:text-[14px]">
							হাদিস সমূহ
						</h1>
						<p className="text-[6px] md:text-[8px]">
							হাদিস পড়ুন শিখুন এবং জানুন
						</p>
					</div>
				</div>
				<div className="flex justify-center gap-3 md:gap-8 items-center">
					<input
						type="text"
						name="search"
						placeholder="Search Hadith"
						className="hidden lg:block border-2 rounded-md p-1 text-sm h-8 w-44"
					/>
					<div>
						<button className=" md:hidden text-2xl bg-gray-400 p-1 rounded-md text-white">
							<FaSearch />
						</button>
					</div>
					<div>
						<button className="hidden md:block rounded-lg text-[10px] bg-emerald-500 px-3 py-2 text-md text-white font-bold ">
							<span className="flex justify-center items-center gap-1">
								সাপোর্ট করুন
								<FaHandHoldingHeart className="text-[15px]" />
							</span>
						</button>
					</div>
					<div className="lg:hidden">
						<SettingsDrawer />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
