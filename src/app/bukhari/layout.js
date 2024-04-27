import BooksSection from '@/components/UI/BooksSection'
import Settings from '@/components/shared/Settings'

const HomeLayout = ({ children }) => {
	return (
		<div className="grid gap-3 grid-cols-12 w-full bg-gray-200 p-3 mt-3 rounded-ss-2xl">
			<div className="hidden md:block md:col-span-3 rounded-t-xl">
				<BooksSection />
			</div>
			<div className="scroll-container h-screen col-span-12 md:col-span-9 lg:col-span-6 overflow-y-auto overflow-x-hidden rounded-t-xl">
				{children}
			</div>
			<div className="hidden lg:block lg:col-span-3 rounded-t-xl">
				<Settings />
			</div>
		</div>
	)
}

export default HomeLayout
