import Link from 'next/link'

const page = () => {
	return (
		<div className=" my-5 text-emerald-600 text-4xl text-center  mx-auto font-bold">
			<h1 className=" ">Please go to hadis </h1>
			<Link href="/bukhari">
				<button className="text-[14px] bg-emerald-600 p-2 rounded-lg text-white my-10">
					হাদিসে যাই
				</button>
			</Link>
		</div>
	)
}

export default page
