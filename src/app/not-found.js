import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
	return (
		<div className=" my-5 text-red-600 text-4xl text-center  mx-auto font-bold">
			<h1 className=" ">404 Page not found !!! </h1>
			<Link href="/bukhari">
				<button className="text-[14px] bg-emerald-600 p-2 rounded-lg text-white my-10">
					হাদিসে ফিরে যাই
				</button>
			</Link>
		</div>
	)
}

export default NotFoundPage
;<h1>Page not found !!! </h1>
