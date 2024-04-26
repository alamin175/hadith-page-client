import Image from 'next/image'
import homeIcon from '@/assets/images/home-logo.png'
import { FaHandHoldingHeart } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
	return (
		<div className="p-2 h-10  ">
			<div className="flex justify-between items-center">
				<div className="flex">
					<Link href="https://ihadis.com/">
						<Image
							src={homeIcon}
							alt="Home Icon"
							width={30}
							height={10}
						/>
					</Link>
					<div className="ml-2">
						<h1 className="font-bold text-[13px]">হাদিস সমূহ</h1>
						<p className="text-[7px]">হাদিস পড়ুন শিখুন এবং জানুন</p>
					</div>
				</div>
				<div className="flex gap-8 items-center">
					<input
						type="text"
						name="search"
						placeholder="Search"
						className=" border-2 rounded-md p-1 h-8 w-44"
					/>
					<button className="rounded-lg text-[10px] bg-emerald-500 px-4 py-2 text-md text-white font-bold ">
						<span className="flex justify-center items-center gap-1">
							সাপোর্ট করুন
							<FaHandHoldingHeart className="text-[15px]" />
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
