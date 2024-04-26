import BooksSection from '@/components/UI/BooksSection'
import Settings from '@/components/UI/Settings'
import React from 'react'

const HomeLayout = ({ children }) => {
	return (
		<div className="grid h-screen grid-flow-col gap-3 grid-cols-1 lg:grid-cols-12 w-full bg-gray-200 p-3 mt-3 rounded-ss-2xl">
			<div className=" lg:col-span-3 bg-white rounded-t-xl">
				<BooksSection />
			</div>
			<div className="lg:col-span-6 bg-white rounded-t-xl">{children}</div>
			<div className="lg:col-span-3 bg-white rounded-t-xl">
				<Settings />
			</div>
		</div>
	)
}

export default HomeLayout
